import React, { useEffect, useState } from "react";
import "./Languages.css";

interface LanguageItem {
  id: number;
  icon: string;
  name: string;
}

// Function to dynamically duplicate each language icon for the infinite scroll
const renderRow = (items: LanguageItem[], reverse: boolean = false) => (
  <div className={`row infinite-scroll ${reverse ? "reverse" : ""}`}>
    {[...items, ...items, ...items, ...items, ...items].map((item, index) => (
      <div key={`${item.id}-${index}`} className="icon-container">
        <img src={item.icon} alt={`${item.name} Icon`} className="icon" />
        <span className="icon-label">{item.name}</span>
      </div>
    ))}
  </div>
);

const LanguagesSection: React.FC = () => {
  const [languages, setLanguages] = useState<LanguageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLanguages = () => {
    setLoading(true);
    fetch("https://portfolio-hichem-benzair.onrender.com/api/languages")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setLanguages(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching languages:", error);
        setError("Failed to load languages.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLanguages();

    // Listen for language updates from AdminTestimonials.tsx
    const handleUpdate = (event: Event) => {
      console.log("Language update detected", (event as CustomEvent).detail);
      fetchLanguages();
    };

    // Use addEventListener and removeEventListener for proper cleanup
    window.addEventListener("languageUpdated", handleUpdate);

    return () => {
      window.removeEventListener("languageUpdated", handleUpdate);
    };
  }, []);

  if (loading && languages.length === 0) return <div className="loading-text">Loading languages...</div>;
  if (error && languages.length === 0) return <div className="error-text">{error}</div>;

  return (
    <section className="languages-section">
      <h2 className="languages-title">Tech Stack</h2>
      {languages.length > 0 ? (
        <>
          {renderRow(languages)}
          {renderRow(languages, true)} {/* Adding the second row back for a better visual effect */}
        </>
      ) : (
        <p className="no-languages">No languages found.</p>
      )}
    </section>
  );
};

export default LanguagesSection;