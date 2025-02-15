import "../styles/sections.css";
import { useLanguage } from "../contexts/LanguageContext";

export default function BrigadeAboutSection() {
  const { language } = useLanguage();
  const isHebrew = language === "he";

  return (
    <section className="leader-section">
      <div className="leader-content">
        <p
          className={`leader-text ${isHebrew ? "hebrew-bold" : "english-bold"}`}
        >
          {isHebrew ? "...על החטיבה" : "About the Brigade..."}
        </p>
        <img src="/images/logo.png" alt="Logo" className="brigade-logo" />

        <p className={`leader-message ${isHebrew ? "hebrew" : "english"}`}>
          {isHebrew ? (
            <>
              האגד הלוגיסטי של אוגדה 99 (אלו״ג 99) הוא הכוח שמאפשר את פעילות
              הלחימה של האוגדה ודואג לכלל הצרכים המבצעיים של הכוחות בשטח. <br />
              <br />
              אנשי האגד פועלים ללא הפסקה כדי לספק ללוחמים תחמושת, דלק, מזון,
              ציוד רפואי ואמצעי לחימה, תוך שינוע מהיר של אספקה והפעלת מערך
              החימוש, התחבורה והרפואה. <br />
              <br />
              במהלך מלחמת חרבות ברזל, פעל אלו״ג 99 בתנאים קיצוניים במשך למעלה
              מ-400 ימי מילואים בעומק רצועת עזה, כשהוא מתחזק ומשדרג כלי לחימה,
              מתקן טנקים, מפעיל מובילי טנקים ומשאיות אספקה, ומעניק טיפול רפואי
              מציל חיים לפצועים בשדה הקרב. <br />
              <br />
              האגד מאגד בתוכו מספר פלוגות מרכזיות – לוגיסטיקה, חימוש, שינוע,
              רפואה, משטרה צבאית, אבטחה ועוד – שכל אחת מהן ממלאת תפקיד חיוני
              לשמירה על כשירות האוגדה והצלחת לוחמיה. <br />
              <br />
              מעבר לתפקידי התמיכה הקריטיים, לוחמי האגד עצמם מתמודדים עם אתגרים
              מבצעיים בשטח האויב ופועלים תחת אש כדי לוודא שהאוגדה תוכל להמשיך
              במשימתה ללא הפרעות. <br />
              <br />
              אנשי אלו״ג 99 הם חלק בלתי נפרד מהעוצמה המבצעית של האוגדה. יכולתם
              לתפקד בתנאים הקיצוניים ביותר, להפעיל מערכים לוגיסטיים מורכבים
              במהירות וביעילות ולשמור על זמינותם של כלי הלחימה, היא זו שאפשרה את
              המשך הפעילות הקרבית הרציפה של האוגדה. <br />
              <br />
              גם לאחר המלחמה, האגד הלוגיסטי ממשיך לתמוך בלוחמים, לשמר את יכולות
              האוגדה ולוודא שהיא ערוכה ומוכנה לכל משימה שתוטל עליה בעתיד.
            </>
          ) : (
            <>
              The Logistics Brigade of the 99th Division (ALOG 99) is the force
              that enables the division's combat operations and ensures all the
              operational needs of the forces in the field. <br />
              <br />
              ALOG personnel work tirelessly to supply the fighters with
              ammunition, fuel, food, medical equipment, and weapons, while also
              managing rapid supply transport and maintaining the logistics,
              transportation, and medical systems. <br />
              <br />
              During the "Swords of Iron" war, ALOG 99 operated under extreme
              conditions for over 400 days of reserve duty deep inside the Gaza
              Strip, maintaining and upgrading combat equipment, repairing
              tanks, operating tank carriers and supply trucks, and providing
              life-saving medical treatment to the wounded on the battlefield.{" "}
              <br />
              <br />
              The brigade consists of several key companies – logistics,
              ordnance, transportation, medical, military police, security, and
              more – each playing a vital role in maintaining the division's
              readiness and combat success. <br />
              <br />
              Beyond its essential support functions, ALOG fighters themselves
              face operational challenges in enemy territory and operate under
              fire to ensure the division can continue its mission
              uninterrupted. <br />
              <br />
              ALOG 99 personnel are an integral part of the division's
              operational strength. Their ability to function under the most
              extreme conditions, operate complex logistics systems quickly and
              efficiently, and ensure the availability of combat equipment is
              what allowed the division's continuous combat operations. <br />
              <br />
              Even after the war, the Logistics Brigade continues to support the
              fighters, maintain the division's capabilities, and ensure it is
              prepared for any future mission.
            </>
          )}
        </p>

        <p
          className={`leader-name ${
            isHebrew ? "hebrew-bold text" : "english-bold"
          }`}
        >
          {isHebrew
            ? "האגד הלוגיסטי של אוגדה 99 הוא עמוד השדרה של הכוח הלוחם – תומך, מאפשר ומבטיח את הצלחת הכוחות בשדה הקרב."
            : "The Logistics Brigade of the 99th Division is the backbone of the fighting force – supporting, enabling, and ensuring success on the battlefield."}
        </p>
      </div>
    </section>
  );
}
