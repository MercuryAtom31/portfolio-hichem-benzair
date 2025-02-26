// import React from "react";
// import { Tabs } from "../components/ui/Tabs";
// import { useTranslation } from "react-i18next"; 
// import weatherApp from "../assets/weatherapp.png";
// import geocache from "../assets/geocache.png";
// import petclinic from "../assets/petclinic.png";
// import contactManager from "../assets/contactmanager.png";
// import ccleaninc from "../assets/ccleaninc.png";

// const projectImages = [
//     {
//       title: "Weather App",
//       value: "weatherapp",
//       url: "https://github.com/MercuryAtom31/WeatherApp-Final-Project",
//       content: <img src={weatherApp} alt="Weather App" className="rounded-lg w-full h-auto" />,
//     },
//     {
//       title: "GeoCache Explorer",
//       value: "geocache",
//       url: "https://github.com/MercuryAtom31/GeoCache-Explore-Android-Application/tree/main",
//       content: <img src={geocache} alt="GeoCache Explorer" className="rounded-lg w-full h-auto" />,
//     },
//     {
//       title: "PetClinic",
//       value: "petclinic",
//       url: "https://github.com/cgerard321/champlain_petclinic",
//       content: <img src={petclinic} alt="PetClinic" className="rounded-lg w-full h-auto" />,
//     },
//     {
//       title: "Contact Manager",
//       value: "contactmanager",
//       url: "https://github.com/MercuryAtom31/.NET_Final_Project_Contact_Manager_Application",
//       content: <img src={contactManager} alt="Contact Manager" className="rounded-lg w-full h-auto" />,
//     },
//     {
//       title: "C Clean Inc.",
//       value: "ccleaninc",
//       url: "https://github.com/ThomasBedard/ccleaninc",
//       content: <img src={ccleaninc} alt="C Clean Inc." className="rounded-lg w-full h-auto" />,
//     },
//   ];
  
// const Projects = () => {
//   const { t } = useTranslation();
//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold text-center mb-6">{t("My Projects")}</h1>
//       <Tabs tabs={projectImages} />
//     </div>
//   );
// };

// export default Projects;
















import React, { useEffect, useState } from "react";
import { Tabs } from "../components/ui/Tabs";
import { useTranslation } from "react-i18next";

interface Project {
  id: number;
  title: string;
  value: string;
  url: string;
  imagePath: string;
}

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">{t("My Projects")}</h1>
      {projects.length > 0 ? (
        <Tabs
          tabs={projects.map((project) => ({
            title: project.title,
            value: project.value,
            url: project.url,
            content: (
              <img
                src={project.imagePath}
                alt={project.title}
                className="rounded-lg w-full h-auto"
              />
            ),
          }))}
        />
      ) : (
        <p className="text-center">{t("Loading projects...")}</p>
      )}
    </div>
  );
};

export default Projects;
