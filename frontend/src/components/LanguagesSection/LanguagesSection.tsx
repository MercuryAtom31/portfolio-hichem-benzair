import React from "react";
import "./Languages.css";


interface LanguageItem {
  icon: string;
  name: string;
}

const renderRow = (items: LanguageItem[], reverse: boolean = false) => (
  <div className={`row infinite-scroll ${reverse ? "reverse" : ""}`}>
    {items.concat(items).map((item, index) => (
      <div key={`${item.name}-${index}`} className="icon-container">
        <img src={item.icon} alt={`${item.name} Icon`} className="icon" />
        <span className="icon-label">{item.name}</span>
      </div>
    ))}
  </div>
);

const LanguagesSection: React.FC = () => {
  const topRowItems: LanguageItem[] = [
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
  ];

  const middleRowItems: LanguageItem[] = [
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
  ];

  const bottomRowItems: LanguageItem[] = [
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
  ];

  return (
    <section className="languages-section">
      {renderRow(topRowItems)}
      {renderRow(middleRowItems, true)}
      {renderRow(bottomRowItems)}
    </section>
  );
};

export default LanguagesSection;
