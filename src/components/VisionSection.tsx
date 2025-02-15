import "../styles/sections.css";
import { useLanguage } from "../contexts/LanguageContext";

export default function VisionSection() {
  const { language } = useLanguage();
  const isHebrew = language === "he";

  return (
    <section className="vision-section">
      <div className="vision-content">
        <p className={`title ${isHebrew ? "hebrew-bold" : "english-bold"}`}>
          {isHebrew ? "חזון העמותה" : "Our Vision"}
        </p>
        <p className={isHebrew ? "text hebrew" : "english"}>
          {isHebrew ? (
            <>
              לוחמי המילואים של אוגדה 99 עמדו בחזית והקריבו מעצמם למען ביטחון
              המדינה. אנו כאן כדי להבטיח שהם ומשפחותיהם לא יישארו לבד – לא בשדה
              הקרב ולא לאחר החזרה הביתה.
              <br />
              העמותה פועלת מתוך תחושת שליחות עמוקה לחזק את הלוחמים, להעניק להם
              תמיכה ראויה ולבנות קהילה איתנה שמוקירה את פועלם.
              <br />
            </>
          ) : (
            <>
              The reserve fighters of Division 99 stood on the front lines and
              sacrificed themselves for the security of the nation. We are here
              to ensure that they and their families are never left alone —
              neither on the battlefield nor after returning home.
              <br />
              The association operates out of a deep sense of duty to support
              the fighters, provide them with proper assistance, and build a
              strong community that appreciates their efforts.
              <br />
            </>
          )}
        </p>
        <>
          {language === "he" ? (
            <>
              <span className="heart-highlight hebrew-bold ">
                .ביחד, אנו מחזקים את מי ששמר עלינו
              </span>
            </>
          ) : (
            <>
              <span className="heart-highlight english-bold">
                Together, we strengthen those who protected us.
              </span>
            </>
          )}
        </>

        <a
          href="https://app.comeunity.me/meird/f/17827/"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-bordeaux ${
            isHebrew ? "hebrew-bold" : "english-bold"
          }`}
        >
          {isHebrew ? "לתרומות" : "Donations"}
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

      <div className="vision-image">
        <img src="/images/vision.png" alt="Vision" />
      </div>
    </section>
  );
}
