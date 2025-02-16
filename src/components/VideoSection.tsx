import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import Player from "@vimeo/player";
import "../styles/video.css";

const trailerID = import.meta.env.VITE_VIMEO_TRAILER_ID;
const fullVideoID = import.meta.env.VITE_VIMEO_FULL_VIDEO_ID;

export default function VideoSection() {
  const { language } = useLanguage();
  const isHebrew = language === "he";

  const [isFullVideo, setIsFullVideo] = useState(false);
  const [lastTime, setLastTime] = useState(0);
  const playerRef = useRef<HTMLIFrameElement | null>(null);
  const playerInstance = useRef<Player | null>(null);

  useEffect(() => {
    if (playerRef.current) {
      playerInstance.current = new Player(playerRef.current);

      playerInstance.current.on("ended", () => {
        setIsFullVideo(false);
      });

      const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && playerInstance.current) {
            playerInstance.current.getCurrentTime().then((time) => {
              setLastTime(time);
              playerInstance.current?.pause();
            });
          } else if (entry.isIntersecting && playerInstance.current) {
            playerInstance.current.setCurrentTime(lastTime).then(() => {
              playerInstance.current?.play();
            });
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3,
      });
      observer.observe(playerRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [lastTime]);

  const playFullVideo = () => {
    setIsFullVideo(true);
    setLastTime(0);
  };

  return (
    <section className="video-container">
      <div className="video-wrapper">
        <iframe
          ref={playerRef}
          className="video-player"
          src={`https://player.vimeo.com/video/${
            isFullVideo ? fullVideoID : trailerID
          }?autoplay=1&loop=${isFullVideo ? 0 : 1}&muted=${
            isFullVideo ? 0 : 1
          }&playsinline=1&title=0&byline=0&portrait=0&badge=0&autopause=0`}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>

        {!isFullVideo && (
          <button className="unmute-btn" onClick={playFullVideo}>
            {isHebrew ? "🎬 נגן סרטון מלא" : "🎬 Watch Full Video"}
          </button>
        )}
      </div>
    </section>
  );
}
