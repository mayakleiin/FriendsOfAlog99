import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/video.css";

export default function VideoSection() {
  const { language } = useLanguage();
  const isHebrew = language === "he";

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullVideo, setIsFullVideo] = useState(false);
  const [lastTime, setLastTime] = useState(0);

  const trailerSrc = "/videos/trailer.mp4";
  const fullVideoSrc = "/videos/AlogVideo.mov";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = lastTime;
    video.muted = isMuted;

    video.play().catch((err) => console.warn("Autoplay blocked:", err));

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && video.paused) {
        video.play();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.currentTime = lastTime;
          video.muted = isMuted;
          video.play();
        } else {
          setLastTime(video.currentTime);
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });
    observer.observe(video);

    video.addEventListener("ended", () => {
      if (!isFullVideo) {
        video.currentTime = 0;
        video.play();
      }
    });

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      observer.unobserve(video);
      video.removeEventListener("ended", () => {
        video.currentTime = 0;
        video.play();
      });
    };
  }, [lastTime, isMuted, isFullVideo]);

  const playFullVideo = () => {
    setIsFullVideo(true);
    setIsMuted(false);
    setLastTime(0);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = fullVideoSrc;
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        videoRef.current.volume = 1;
        videoRef.current.play();
      }
    }, 300);
  };

  return (
    <section className="video-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src={isFullVideo ? fullVideoSrc : trailerSrc}
          className="video-player large-video"
          autoPlay
          playsInline
          controls={false}
          muted={isMuted}
        />
        {!isFullVideo && (
          <button className="unmute-btn" onClick={playFullVideo}>
            {isHebrew ? "🎬 לסרטון המלא" : "🎬 Watch Full Video"}
          </button>
        )}
      </div>
    </section>
  );
}
