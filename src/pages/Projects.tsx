import React from "react";
import { Tabs } from "../components/ui/Tabs"; 
import weatherApp from "../assets/weatherapp.png";
import geocache from "../assets/geocache.png";
import petclinic from "../assets/petclinic.png";
import contactManager from "../assets/contactmanager.png";
import ccleaninc from "../assets/ccleaninc.png";

const projectImages = [
    {
      title: "Weather App",
      value: "weatherapp",
      content: <img src={weatherApp} alt="Weather App" className="rounded-lg w-full h-auto" />,
    },
    {
      title: "GeoCache Explorer",
      value: "geocache",
      content: <img src={geocache} alt="GeoCache Explorer" className="rounded-lg w-full h-auto" />,
    },
    {
      title: "PetClinic",
      value: "petclinic",
      content: <img src={petclinic} alt="PetClinic" className="rounded-lg w-full h-auto" />,
    },
    {
      title: "Contact Manager",
      value: "contactmanager",
      content: <img src={contactManager} alt="Contact Manager" className="rounded-lg w-full h-auto" />,
    },
    {
      title: "C Clean Inc.",
      value: "ccleaninc",
      content: <img src={ccleaninc} alt="C Clean Inc." className="rounded-lg w-full h-auto" />,
    },
  ];
  
const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
      <Tabs tabs={projectImages} />
    </div>
  );
};

export default Projects;
