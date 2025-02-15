import { useEffect, useState } from "react";
import VideoSection from "./VideoSection";
import "../styles/brigade.css";

export default function BrigadeHeroSection() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHidden(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container">
      {}
      <header className={`video-header ${isHidden ? "hidden" : ""}`}>
        <div className="video-hero-container">
          <VideoSection />
        </div>
      </header>

      {}
      <div className="main-image"></div>
    </div>
  );
}
