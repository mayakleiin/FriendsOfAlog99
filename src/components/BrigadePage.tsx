import BrigadeHeroSection from "./BrigadeHeroSection";
import BrigadeAboutSection from "./BrigadeAboutSection";
import "../styles/brigade.css";

export default function BrigadePage() {
  return (
    <div>
      <BrigadeHeroSection />
      <BrigadeAboutSection />
    </div>
  );
}
