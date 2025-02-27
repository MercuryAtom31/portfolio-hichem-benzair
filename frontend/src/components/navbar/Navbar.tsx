// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signOut, User } from "firebase/auth";
// import { auth } from "../../firebaseConfig";
// import { useTranslation } from "react-i18next";
// import "./Navbar.css";

// import FranceFlag from "../../assets/france-flag.svg";
// import UkFlag from "../../assets/united-states-of-america-flag.svg";

// interface NavbarProps {
//   user: User | null;
// }

// const Navbar: React.FC<NavbarProps> = ({ user }) => {
//   const { t, i18n } = useTranslation();
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await signOut(auth);
//     navigate("/");
//   };

//   const changeLanguage = (lang: string) => {
//     i18n.changeLanguage(lang);
//     localStorage.setItem("language", lang);
//   };

//   return (
//     <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="text-2xl font-bold glitch">Hichem A. Benzaïr</div>

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="lg:hidden text-white focus:outline-none"
//           >
//             {isOpen ? "✖" : "☰"}
//           </button>

//           <div
//             className={`lg:flex space-x-6 ${
//               isOpen ? "block" : "hidden"
//             } lg:block absolute lg:static top-16 left-0 w-full bg-gray-900 lg:w-auto lg:bg-transparent text-center lg:text-left`}
//           >
//             {[
//               { label: t("Home"), link: "/", internal: true },
//               { label: t("Projects"), link: "/projects", internal: true },
//               { label: t("Contact Me"), link: "/contact", internal: true },
//               {
//                 label: t("LinkedIn"),
//                 link: "https://www.linkedin.com/in/hichem-a-benzair",
//                 internal: false,
//               },
//               {
//                 label: t("Github"),
//                 link: "https://github.com/MercuryAtom31",
//                 internal: false,
//               },
//               {
//                 label: t("Udemy"),
//                 link: "https://www.udemy.com/course/essential-tips-for-new-computer-science-students/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_GammaCatchall_NonP_la.EN_cc.CA&campaigntype=Search&portfolio=Canada&language=EN&product=Course&test=&audience=DSA&topic=&priority=Gamma&utm_content=deal4584&utm_term=_._ag_160250050302_._ad_700948785488_._kw__._de_c_._dm__._pl__._ti_aud-2268488108639:dsa-1456167871416_._li_9000561_._pd__._&matchtype=&gad_source=1&gbraid=0AAAAADROdO3IShDCiEOlH_Ei7yBU2xnbe&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA3Mr5iGP1VFZDpkPrxgfBJz21ZqKkwHhlrHQw9CufXtYa6dC6kRi7RoCQOEQAvD_BwE",
//                 internal: false,
//               },
//               { label: t("Youtube"), link: "/videos", internal: true },
//             ].map((item, index) =>
//               item.internal ? (
//                 <Link to={item.link} key={index} className="link">
//                   <span className="mask">
//                     <div className="link-container">
//                       <span className="link-title1 title">{item.label}</span>
//                       <span className="link-title2 title">{item.label}</span>
//                     </div>
//                   </span>
//                 </Link>
//               ) : (
//                 <a
//                   href={item.link}
//                   key={index}
//                   className="link"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span className="mask">
//                     <div className="link-container">
//                       <span className="link-title1 title">{item.label}</span>
//                       <span className="link-title2 title">{item.label}</span>
//                     </div>
//                   </span>
//                 </a>
//               )
//             )}

//             {/* Conditionally show Admin Dashboard link for the admin user */}
//             {user && user.email === "hichembenzair@gmail.com" && (
//               <Link to="/admin/testimonials" className="link">
//                 <span className="mask">
//                   <div className="link-container">
//                     <span className="link-title1 title">Admin</span>
//                     <span className="link-title2 title">Admin</span>
//                   </div>
//                 </span>
//               </Link>
//             )}

//             {/* Language Switcher */}
//             <div className="mt-2 lg:mt-0 text-center lg:text-left">
//               <button onClick={() => changeLanguage("en")} className="mr-2">
//                 <img
//                   src={UkFlag}
//                   alt="English"
//                   className="inline-block h-6 w-6"
//                 />
//               </button>

//               <button onClick={() => changeLanguage("fr")}>
//                 <img
//                   src={FranceFlag}
//                   alt="French"
//                   className="inline-block h-6 w-6"
//                 />
//               </button>
//             </div>

//             {/* Authentication Buttons */}
//             <div className="mt-2 lg:mt-0 text-center lg:text-left">
//               {user ? (
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-500 px-4 py-2 rounded"
//                 >
//                   {t("logout")}
//                 </button>
//               ) : (
//                 <Link to="/login" className="bg-green-500 px-4 py-2 rounded">
//                   {t("login")}
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
















import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut, User } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

import FranceFlag from "../../assets/france-flag.svg";
import UkFlag from "../../assets/united-states-of-america-flag.svg";

interface NavbarProps {
  user: User | null;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only run if the menu is open AND screen width is below the 'lg' breakpoint
      if (isOpen && window.innerWidth < 1024) {
        if (
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold glitch">Hichem A. Benzaïr</div>

          {/* Hamburger Button */}
          <button
            ref={buttonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Menu Container */}
          <div
            ref={menuRef}
            className={`lg:flex space-x-6 ${
              isOpen ? "block" : "hidden"
            } lg:block absolute lg:static top-16 left-0 w-full bg-gray-900 lg:w-auto lg:bg-transparent text-center lg:text-left`}
          >
            {[
              { label: t("Home"), link: "/", internal: true },
              { label: t("Projects"), link: "/projects", internal: true },
              { label: t("Contact Me"), link: "/contact", internal: true },
              {
                label: t("LinkedIn"),
                link: "https://www.linkedin.com/in/hichem-a-benzair",
                internal: false,
              },
              {
                label: t("Github"),
                link: "https://github.com/MercuryAtom31",
                internal: false,
              },
              {
                label: t("Udemy"),
                link: "https://www.udemy.com/course/essential-tips-for-new-computer-science-students/?utm_source=adwords&utm_medium=udemyads&utm_campaign=Search_DSA_GammaCatchall_NonP_la.EN_cc.CA&campaigntype=Search&portfolio=Canada&language=EN&product=Course&test=&audience=DSA&topic=&priority=Gamma&utm_content=deal4584&utm_term=_._ag_160250050302_._ad_700948785488_._kw__._de_c_._dm__._pl__._ti_aud-2268488108639:dsa-1456167871416_._li_9000561_._pd__._&matchtype=&gad_source=1&gbraid=0AAAAADROdO3IShDCiEOlH_Ei7yBU2xnbe&gclid=CjwKCAiAlPu9BhAjEiwA5NDSA3Mr5iGP1VFZDpkPrxgfBJz21ZqKkwHhlrHQw9CufXtYa6dC6kRi7RoCQOEQAvD_BwE",
                internal: false,
              },
              { label: t("Youtube"), link: "/videos", internal: true },
            ].map((item, index) =>
              item.internal ? (
                <Link to={item.link} key={index} className="link">
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">{item.label}</span>
                      <span className="link-title2 title">{item.label}</span>
                    </div>
                  </span>
                </Link>
              ) : (
                <a
                  href={item.link}
                  key={index}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mask">
                    <div className="link-container">
                      <span className="link-title1 title">{item.label}</span>
                      <span className="link-title2 title">{item.label}</span>
                    </div>
                  </span>
                </a>
              )
            )}

            {/* Conditionally show Admin Dashboard link for the admin user */}
            {user && user.email === "hichembenzair@gmail.com" && (
              <Link to="/admin/testimonials" className="link">
                <span className="mask">
                  <div className="link-container">
                    <span className="link-title1 title">Admin</span>
                    <span className="link-title2 title">Admin</span>
                  </div>
                </span>
              </Link>
            )}

            {/* Language Switcher */}
            <div className="mt-2 lg:mt-0 text-center lg:text-left">
              <button onClick={() => changeLanguage("en")} className="mr-2">
                <img
                  src={UkFlag}
                  alt="English"
                  className="inline-block h-6 w-6"
                />
              </button>
              <button onClick={() => changeLanguage("fr")}>
                <img
                  src={FranceFlag}
                  alt="French"
                  className="inline-block h-6 w-6"
                />
              </button>
            </div>

            {/* Authentication Buttons */}
            <div className="mt-2 lg:mt-0 text-center lg:text-left">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 px-4 py-2 rounded"
                >
                  {t("logout")}
                </button>
              ) : (
                <Link to="/login" className="bg-green-500 px-4 py-2 rounded">
                  {t("login")}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
