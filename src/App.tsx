import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import ImageCarousel from "./components/ImageCarousel";
import LeaderSection from "./components/LeaderSection";
import VisionSection from "./components/VisionSection";
import MissionSection from "./components/MissionSection";
import VideoSection from "./components/VideoSection";
import ContactForm from "./components/ContactForm";
import BrigadePage from "./components/BrigadePage";
import NotFoundPage from "./components/NotFoundPage";
import { LanguageProvider } from "./contexts/LanguageContext";

import "./App.css";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Navbar />
        <Routes>
          {}
          <Route
            path="/"
            element={
              <div className="app-container">
                <HeroSection />
                <VideoSection />
                <div className="sections-container">
                  {/* <ImageCarousel /> */}
                  <section id="about">
                    <LeaderSection />
                  </section>
                  <section id="vision">
                    <VisionSection />
                  </section>
                  <section id="mission">
                    <MissionSection />
                  </section>
                </div>
              </div>
            }
          />

          {}
          <Route path="/contact" element={<ContactForm />} />

          {}
          <Route path="/brigade" element={<BrigadePage />} />

          {}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
