import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "./i18n/i18n";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LanguagesSection from "./components/LanguagesSection/LanguagesSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Login from "./components/Login";
import Projects from "./pages/Projects";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Videos from "./pages/Videos";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true); // 🔹 Added loading state
  const { t } = useTranslation() || {
    t: (key) => key,
    i18n: { changeLanguage: () => {} },
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // 🔹 Set loading to false once user state is updated
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {loading ? ( // 🔹 Show loading state instead of Login flashing
          <div className="flex justify-center items-center h-screen">
            <p className="text-white text-2xl">Loading...</p>
          </div>
        ) : user ? ( // 🔹 If user is authenticated, show the main layout
          <div className="flex flex-col flex-grow">
            <Navbar />
            
            {/* Language Switcher */}
            <div className="absolute top-4 right-4">
              <button onClick={() => changeLanguage("en")} className="mr-2">
                🇬🇧 English
              </button>
              <button onClick={() => changeLanguage("fr")}>🇫🇷 Français</button>
            </div>

            {/* Main Content */}
            <main className="pt-16 flex-grow">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <LanguagesSection />
                    </>
                  }
                />
                <Route path="/projects" element={<Projects />} />
                <Route path="/videos" element={<Videos />} />
              </Routes>
            </main>

            {/* Logout Button */}
            <div className="fixed bottom-4 right-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                {t("logout")}
              </button>
            </div>

            {/* <Footer /> */}
          </div>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
}

export default App;
