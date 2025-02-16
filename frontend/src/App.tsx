import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n/i18n";  
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Login from "./components/Login";
import Projects from "./pages/Projects";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Videos from "./pages/Videos";
import TestimonialSection from "./components/testimonials/Testimonial";
import LanguagesSection from "./components/LanguagesSection/LanguagesSection";
import Contact from "./pages/Contact";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} />

        <main className="pt-16 flex-grow">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <p className="text-white text-2xl">Loading...</p>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={
                <>
                  <HeroSection />
                  <LanguagesSection />
                  <TestimonialSection />
                </>
              } />
              <Route path="/projects" element={<Projects />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          )}
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;


