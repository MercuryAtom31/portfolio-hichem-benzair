import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import LanguagesSection from "./components/LanguagesSection/LanguagesSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Login from "./components/Login";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth"; 

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      {user && <Navbar />} 
      {!user ? (
        <Login />
      ) : (
        <div>
          <main className="pt-16">
            <HeroSection />
            <LanguagesSection />
          </main>
          <div className="fixed bottom-4 right-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;