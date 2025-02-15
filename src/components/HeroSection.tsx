import { useEffect, useState } from "react";
import "../styles/hero.css";

export default function HeroSection() {
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
      <header className={`header ${isHidden ? "hidden" : ""}`}>
        <div className="header-background">
          <img
            src="/images/AssoLogo.png"
            alt="Header Logo"
            className="header-logo"
          />
        </div>
      </header>

      {}
      <div className="main-image"></div>
    </div>
  );
}
