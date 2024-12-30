import React from "react";
import "./Languages.css";

const LanguagesSection = () => {
  const topRowItems = [
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

  const middleRowItems = [
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

  const bottomRowItems = [
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

  const renderRow = (items, reverse = false) => (
    <div className={`row infinite-scroll ${reverse ? "reverse" : ""}`}>
      {items.concat(items).map((item, index) => (
        <div key={`${item.name}-${index}`} className="icon-container">
          <img src={item.icon} alt={`${item.name} Icon`} className="icon" />
          <span className="icon-label">{item.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="languages-section">
      <div className="row infinite-scroll">
        {renderRow(topRowItems)}
      </div>
      <div className="row infinite-scroll reverse">
        {renderRow(middleRowItems, true)}
      </div>
      <div className="row infinite-scroll">
        {renderRow(bottomRowItems)}
      </div>
    </section>
  );
};

export default LanguagesSection;
