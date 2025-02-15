import { useState } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../contexts/LanguageContext";
import "../styles/contact.css";

export default function ContactForm() {
  const { language } = useLanguage();
  const isHebrew = language === "he";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    language: language,
  });

  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim())
      newErrors.firstName = isHebrew ? "שדה חובה" : "Required field";
    if (!formData.lastName.trim())
      newErrors.lastName = isHebrew ? "שדה חובה" : "Required field";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = isHebrew ? "אימייל לא תקין" : "Invalid email";
    if (!formData.phone.trim())
      newErrors.phone = isHebrew ? "שדה חובה" : "Required field";
    if (!formData.message.trim())
      newErrors.message = isHebrew ? "שדה חובה" : "Required field";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    const templateId = isHebrew
      ? import.meta.env.VITE_EMAILJS_TEMPLATE_ID_HE
      : import.meta.env.VITE_EMAILJS_TEMPLATE_ID_EN;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        templateId,
        {
          from_name: formData.firstName + " " + formData.lastName,
          reply_to: formData.email,
          phone_number: formData.phone,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setIsSent(true);
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
          language: language,
        });
        setErrors({});
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error sending email:", error);
      });
  };

  return (
    <section className="contact-container">
      <div className="contact-form-wrapper">
        <h2
          className={`contact-title ${
            isHebrew ? "hebrew-bold" : "english-bold"
          }`}
        >
          {isHebrew ? "צור קשר" : "Contact Us"}
        </h2>

        {isSent ? (
          <p
            className={`success-message ${
              isHebrew ? "hebrew-bold" : "english-bold"
            }`}
          >
            ✅{" "}
            {isHebrew ? "!ההודעה נשלחה בהצלחה" : "Message sent successfully!"}
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <div className="input-field">
                <input
                  type="text"
                  name="firstName"
                  placeholder={isHebrew ? "* שם פרטי" : "* First Name"}
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <span className="error-message">{errors.firstName}</span>
                )}
              </div>
              <div className="input-field">
                <input
                  type="text"
                  name="lastName"
                  placeholder={isHebrew ? "* שם משפחה" : "* Last Name"}
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <span className="error-message">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="input-field">
              <input
                type="tel"
                name="phone"
                placeholder={isHebrew ? "* מספר טלפון" : "* Phone Number"}
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <div className="input-field">
              <input
                type="email"
                name="email"
                placeholder={isHebrew ? "* אימייל" : "* Email"}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="input-field">
              <textarea
                name="message"
                placeholder={isHebrew ? "* הודעה" : "* Message"}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={`btn-bordeaux ${
                isHebrew ? "hebrew-bold" : "english-bold"
              }`}
              disabled={isLoading}
            >
              {isLoading
                ? isHebrew
                  ? "⏳ ...ההודעה בשליחה"
                  : "Sending... ⏳"
                : isHebrew
                ? "שליחה"
                : "Send"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
