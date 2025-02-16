import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/video.css";

export default function VideoSection() {
  const { language } = useLanguage();
  const isHebrew = language === "he";

  const [isFullVideo, setIsFullVideo] = useState(false);

  // מזהה הטריילר והסרטון המלא ב-Vimeo
  const trailerID = "1057226000"; // מזהה הטריילר
  const fullVideoID = "1057225896"; // מזהה הסרטון המלא

  const playFullVideo = () => {
    setIsFullVideo(true);
  };

  return (
    <section className="video-container">
      <div className="video-wrapper">
        {!isFullVideo ? (
          <div className="vimeo-container">
            <iframe
              src={`https://player.vimeo.com/video/${trailerID}?autoplay=1&muted=1&playsinline=1&badge=0&autopause=0`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="trailer"
            ></iframe>
          </div>
        ) : (
          <div className="vimeo-container">
            <iframe
              src={`https://player.vimeo.com/video/${fullVideoID}?autoplay=1&muted=0&playsinline=1&badge=0&autopause=0`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="full-video"
            ></iframe>
          </div>
        )}
        {!isFullVideo && (
          <button className="unmute-btn" onClick={playFullVideo}>
            {isHebrew ? "🎬 נגן סרטון מלא" : "🎬 Watch Full Video"}
          </button>
        )}
      </div>
    </section>
  );
}
