import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/navbar.css";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsDropdownOpen(false);
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (id: string) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 500);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        {/*Hamburger Button*/}
        <button className="menu-icon" onClick={() => setIsMenuOpen(true)}>
          ☰
        </button>

        {/*Switching Languages*/}
        <button
          className={`btn btn-bordeaux english-bold `}
          onClick={toggleLanguage}
        >
          {language === "he" ? "EN" : "HE"}
        </button>

        {/* Donation Button */}
        <a
          href="https://app.comeunity.me/meird/f/17827/"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-bordeaux ${
            language === "en" ? "english-bold" : "hebrew-bold"
          }`}
        >
          {language === "he" ? "לתרומות" : "Donations"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill="none"
          >
            <path
              d="M10.6802 18.35L9.23018 17.03C4.08018 12.36 0.680176 9.27 0.680176 5.5C0.680176 2.41 3.10018 0 6.18018 0C7.92018 0 9.59018 0.81 10.6802 2.08C11.7702 0.81 13.4402 0 15.1802 0C18.2602 0 20.6802 2.41 20.6802 5.5C20.6802 9.27 17.2802 12.36 12.1302 17.03L10.6802 18.35Z"
              fill="white"
            />
          </svg>
        </a>
      </div>

      <div className="nav-center">
        {/* Home Page */}
        <a
          href="/"
          className={language === "en" ? "english-bold" : "hebrew-bold"}
        >
          {language === "he" ? "עמוד הבית" : "Home Page"}
        </a>

        {/* DropDown */}
        <div className="dropdown">
          <button
            className={`dropdown-btn ${
              language === "en" ? "english-bold" : "hebrew-bold"
            }`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {language === "he" ? "העמותה +" : "The Association +"}
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button
                className={language === "en" ? "english-bold" : "hebrew-bold"}
                onClick={() => handleNavigation("about")}
              >
                {language === "he" ? "אודות" : "About"}
              </button>
              <button
                className={language === "en" ? "english-bold" : "hebrew-bold"}
                onClick={() => handleNavigation("vision")}
              >
                {language === "he" ? "חזון" : "Vision"}
              </button>
              <button
                className={language === "en" ? "english-bold" : "hebrew-bold"}
                onClick={() => handleNavigation("mission")}
              >
                {language === "he" ? "מטרות" : "Mission"}
              </button>
              <a
                href="/contact"
                className={language === "en" ? "english-bold" : "hebrew-bold"}
              >
                {language === "he" ? "צור קשר" : "Contact"}
              </a>
            </div>
          )}
        </div>

        {/* Brigade Page */}
        <a
          href="/brigade"
          className={language === "en" ? "english-bold" : "hebrew-bold"}
        >
          {language === "he" ? "החטיבה" : "The Brigade"}
        </a>
      </div>

      <div className="nav-right">
        {/* Logo */}
        <img src="/images/logo.png" alt="Logo" className="navbar-logo" />
      </div>

      {/* Mobile Menu*/}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
          ✖
        </button>

        <nav className="mobile-nav">
          <a
            href="/"
            className={language === "en" ? "english-bold" : "hebrew-bold"}
            onClick={() => setIsMenuOpen(false)}
          >
            {language === "he" ? "עמוד הבית" : "Home"}
          </a>
          <button
            className={language === "en" ? "english-bold" : "hebrew-bold"}
            onClick={() => handleNavigation("about")}
          >
            {language === "he" ? "אודות" : "About"}
          </button>
          <button
            className={language === "en" ? "english-bold" : "hebrew-bold"}
            onClick={() => handleNavigation("vision")}
          >
            {language === "he" ? "חזון" : "Vision"}
          </button>
          <button
            className={language === "en" ? "english-bold" : "hebrew-bold"}
            onClick={() => handleNavigation("mission")}
          >
            {language === "he" ? "מטרות" : "Mission"}
          </button>
          <a
            href="/contact"
            className={language === "en" ? "english-bold" : "hebrew-bold"}
            onClick={() => setIsMenuOpen(false)}
          >
            {language === "he" ? "צור קשר" : "Contact"}
          </a>
          <a
            href="/brigade"
            className={language === "en" ? "english-bold" : "hebrew-bold"}
            onClick={() => setIsMenuOpen(false)}
          >
            {language === "he" ? "החטיבה" : "The Brigade"}
          </a>
        </nav>
      </div>
    </nav>
  );
}
