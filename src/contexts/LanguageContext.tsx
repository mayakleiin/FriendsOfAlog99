import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const LanguageContext = createContext({
  language: "he",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "he"
  );

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "he" ? "en" : "he"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
