import "../styles/sections.css";
import { useLanguage } from "../contexts/LanguageContext";

export default function MissionSection() {
  const { language } = useLanguage();
  const isHebrew = language === "he";

  return (
    <section className="mission-section">
      <div className="mission-content">
        <p className={`title ${isHebrew ? "hebrew-bold" : "english-bold"}`}>
          {isHebrew ? "מטרות" : "Mission"}
        </p>
        <p className={isHebrew ? "text hebrew" : "english"}>
          {isHebrew ? (
            <>
              <span className="vi hebrew-bold">סיוע למשפחות הלוחמים</span> –
              ליווי, תכניות רווחה וסיוע כלכלי.
              <br />
              <span className="vi hebrew-bold">רווחת הפרט ביחידה</span> –
              פעילויות והטבות שיסייעו לחיילים בחזרה לשגרה.
              <br />
              <span className="vi hebrew-bold">סיוע לעצמאים</span> – תמיכה
              כלכלית ללוחמים שנפגעו בשל שירות המילואים הממושך.
              <br />
              <span className="vi hebrew-bold">חיזוק קהילת הלוחמים</span> –
              טיפוח ערבות הדדית וגיבוש קהילתי.
            </>
          ) : (
            <>
              <span className="vi english-bold">
                Support for Soldiers' Families
              </span>
              – Mentorship, welfare programs, and financial assistance.
              <br />
              <span className="vi english-bold">
                Individual Welfare in the Unit
              </span>
              – Activities and benefits to help soldiers return to routine life.
              <br />
              <span className="vi english-bold">Support for Independents</span>
              – Economic aid for soldiers who suffered financial loss due to
              extended reserve duty.
              <br />
              <span className="vi english-bold">
                Strengthening the Soldiers' Community
              </span>
              – Promoting mutual responsibility and community bonding.
            </>
          )}
        </p>

        <a
          href="https://app.comeunity.me/meird/f/17827/"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-bordeaux ${
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
      <div className="mission-image">
        <img src="/images/mission.png" alt="Mission" />
      </div>
    </section>
  );
}
