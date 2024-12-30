import React from "react";
import Navbar from "./components/navbar/Navbar";
import LanguagesSection from "./components/LanguagesSection/LanguagesSection";
import "./index.css";

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <h1 className="text-center mt-8">Welcome to My Portfolio</h1>
        <LanguagesSection />
      </main>
    </div>
  );
}

export default App;

