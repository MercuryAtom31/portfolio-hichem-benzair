import React from "react";
import { Tabs } from "../components/ui/Tabs";
import { useTranslation } from "react-i18next";
import weatherApp from "../assets/weatherapp.png";
import geocache from "../assets/geocache.png";
import petclinic from "../assets/petclinic.png";
import contactManager from "../assets/contactmanager.png";
import ccleaninc from "../assets/ccleaninc.png";

const projectImages = [
  {
    title: "C Clean Inc.",
    value: "ccleaninc",
    url: "https://github.com/ThomasBedard/ccleaninc",
    content: (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#f7971e] to-[#ffd200] shadow-lg p-1">
        <video
          src="/videos/cclean.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl w-full h-[500px] object-contain"
        />
      </div>
    ),
  },  
  {
    title: "Weather App",
    value: "weatherapp",
    url: "https://github.com/MercuryAtom31/WeatherApp-Final-Project",
    content: (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#36d1dc] to-[#5b86e5] shadow-lg p-1">
        <img
          src={weatherApp}
          alt="Weather App"
          className="rounded-xl w-full h-[500px] object-contain"
        />
      </div>
    ),
  },
  {
    title: "GeoCache Explorer",
    value: "geocache",
    url: "https://github.com/MercuryAtom31/GeoCache-Explore-Android-Application/tree/main",
    content: (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#654ea3] to-[#eaafc8] shadow-lg p-1">
        <img
          src={geocache}
          alt="GeoCache Explorer"
          className="rounded-xl w-full h-[500px] object-contain"
        />
      </div>
    ),
  },
  {
    title: "PetClinic",
    value: "petclinic",
    url: "https://github.com/cgerard321/champlain_petclinic",
    content: (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff6a00] to-[#ee0979] shadow-lg p-1">
        <img
          src={petclinic}
          alt="PetClinic"
          className="rounded-xl w-full h-[500px] object-contain"
        />
      </div>
    ),
  },
  {
    title: "Contact Manager",
    value: "contactmanager",
    url: "https://github.com/MercuryAtom31/.NET_Final_Project_Contact_Manager_Application",
    content: (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ff9966] to-[#ff5e62] shadow-lg p-1">
        <video
          src="/videos/contact_manager_app.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl w-full h-[500px] object-contain"
        />
      </div>
    ),
  },
  {
    title: "Portfolio Website",
    value: "portfolio",
    url: "https://github.com/MercuryAtom31/portfolio-hichem-benzair",
    content: (
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00c6ff] to-[#0072ff] shadow-lg p-1">
        <video
          src="/videos/portfolio_website.mov"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-xl w-full h-[500px] object-contain"
        />
      </div>
    ),
  },  
];

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">
        {t("My Projects")}
      </h1>
      <Tabs tabs={projectImages} />
    </div>
  );
};

export default Projects;
