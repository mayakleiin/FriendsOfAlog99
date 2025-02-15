import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

import "../styles/notfound.css";

export default function NotFoundPage() {
  const { language } = useLanguage();

  const isHebrew = language === "he";

  return (
    <div className="not-found-container">
      <>
        {language === "he" ? (
          <>
            <p className="hebrew-bold text not-found">404 - הדף לא נמצא</p>

            <p className="hebrew text">
              הדף שחיפשת אינו קיים. נסה לחזור לדף הבית.
            </p>
          </>
        ) : (
          <>
            <p className="english-bold not-found">404 - Page Not Found.</p>

            <p className="english">
              The page you were looking for does not exist. Try returning to the
              homepage.
            </p>
          </>
        )}
      </>

      <img src="/images/logo.png" alt="Logo" className="brigade-logo" />
      <Link
        to="/"
        className={`btn-bordeaux ${isHebrew ? "hebrew-bold" : "english-bold"}`}
      >
        {isHebrew ? "חזרה לעמוד הבית" : "Return to Homepage"}
      </Link>
    </div>
  );
}
