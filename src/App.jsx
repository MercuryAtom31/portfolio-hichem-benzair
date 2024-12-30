import React from "react";
import Navbar from "./components/navbar/Navbar";
import LanguagesSection from "./components/LanguagesSection/LanguagesSection";
import "./index.css";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <LanguagesSection />
      </main>
    </div>
  );
}

export default App;

