import "../styles/sections.css";
import { useLanguage } from "../contexts/LanguageContext";

export default function LeaderSection() {
  const { language } = useLanguage();
  const isHebrew = language === "he";

  return (
    <section className="leader-section">
      <div className="leader-content">
        <div className="leader-quote-icon">
          <img src="/images/quote.svg" alt="quote icon" />
        </div>
        <p
          className={`leader-text ${isHebrew ? "hebrew-bold" : "english-bold"}`}
        >
          {isHebrew
            ? "דבר יושב ראש העמותה"
            : "Message from the Chairman of the Association"}
        </p>
        <p className={`leader-message ${isHebrew ? "hebrew" : "english"}`}>
          {isHebrew ? (
            <>
              חברות וחברים יקרים,
              <br />
              <br />
              אוגדה 99 עמדה בחזית הלחימה במלחמת "חרבות ברזל" במשך למעלה מ-400
              ימי מילואים. לוחמיה עזבו את משפחותיהם וחייהם האישיים כדי להגן על
              המדינה, והקריבו רבות למען כולנו.
              <br />
              <br />
              מאחורי כל לוחם בחזית עמד האגד הלוגיסטי, שפעל ללא הפסקה כדי לספק
              לכוחות תחמושת, דלק, מזון, ציוד רפואי ואמצעי לחימה – כל מה שנדרש
              כדי להבטיח את הצלחתם.
              <br />
              <br />
              כעת, לאחר חודשים ארוכים של לחימה, הגיע תורנו להלחם למענם!
              <br />
              עמותת "ידידי החטיבה הטכנולוגיסטית" הוקמה מתוך צורך ממשי, תחושת
              שליחות ורצון עמוק להבטיח שלוחמינו ומשפחותיהם לא ישארו לבד - לא
              בשדה הקרב, ולא בחזרה הביתה.
              <br />
              <br />
              לוחמי אוגדה 99 נתנו את כל כולם למען ביטחוננו, ועכשיו אנחנו כאן כדי
              לתמוך בהם. אני מזמין אתכם להיות שותפים למיזם, לתרום ולעמוד לצידם.
              זה הרגע שלנו להחזיר להם בחזרה!
              <br />
              <br />
            </>
          ) : (
            <>
              Dear Friends,
              <br />
              <br />
              The 99th Division stood at the forefront of the fighting in the
              "Swords of Iron" war for over 400 days of reserve duty. Its
              warriors left their families and personal lives behind to defend
              the country, making immense sacrifices for all of us.
              <br />
              <br />
              Behind every soldier on the front lines stood the Logistics
              Brigade, working tirelessly to provide the forces with ammunition,
              fuel, food, medical supplies, and weaponry—everything necessary to
              ensure their success.
              <br />
              <br />
              Now, after months of intense combat, it is our turn to fight for
              them!
              <br />
              The "Friends of the Technologist Brigade" association was
              established out of a real need, a sense of duty, and a deep desire
              to ensure that our soldiers and their families are never left
              alone—not on the battlefield and not upon returning home.
              <br />
              <br />
              The warriors of the 99th Division gave their all for our security,
              and now we are here to support them. I invite you to join this
              initiative, contribute, and stand by their side. This is our
              moment to give back to them!
              <br />
              <br />
            </>
          )}
        </p>

        <>
          {language === "he" ? (
            <>
              <span className="leader-signature">,בברכה</span>

              <p className="leader-name hebrew-bold">סא"ל ליאור וישנגרד</p>
              <p className="leader-role hebrew">מג"ד אלו"ג 99</p>
            </>
          ) : (
            <>
              <span className="leader-signature">Sincerely,</span>

              <p className="leader-name english-bold">
                Lt. Col. Lior Vishnegrad
              </p>
              <p className="leader-role english">Commander of ALOG 99</p>
            </>
          )}
        </>
      </div>
    </section>
  );
}
