// import React from "react";
// import "./Languages.css";


// interface LanguageItem {
//   icon: string;
//   name: string;
// }

// const renderRow = (items: LanguageItem[], reverse: boolean = false) => (
//   <div className={`row infinite-scroll ${reverse ? "reverse" : ""}`}>
//     {items.concat(items).map((item, index) => (
//       <div key={`${item.name}-${index}`} className="icon-container">
//         <img src={item.icon} alt={`${item.name} Icon`} className="icon" />
//         <span className="icon-label">{item.name}</span>
//       </div>
//     ))}
//   </div>
// );

// const LanguagesSection: React.FC = () => {
//   const topRowItems: LanguageItem[] = [
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
//   ];

//   const middleRowItems: LanguageItem[] = [
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
//   ];

//   const bottomRowItems: LanguageItem[] = [
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
//     { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
//   ];

//   return (
//     <section className="languages-section">
//       {renderRow(topRowItems)}
//       {renderRow(middleRowItems, true)}
//       {renderRow(bottomRowItems)}
//     </section>
//   );
// };

// export default LanguagesSection;


















import React, { useEffect, useState } from "react";
import "./Languages.css";

interface LanguageItem {
  id: number;
  icon: string;
  name: string;
}

// Function to dynamically duplicate each language icon 5 times
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

  if (loading && languages.length === 0) return <div>Loading languages...</div>;
  if (error && languages.length === 0) return <div>{error}</div>;

  return (
    <section className="languages-section">
      {languages.length > 0 ? (
        <>
          {renderRow(languages)}
          {renderRow(languages, true)}
        </>
      ) : (
        <p>No languages found.</p>
      )}
    </section>
  );
};

export default LanguagesSection;