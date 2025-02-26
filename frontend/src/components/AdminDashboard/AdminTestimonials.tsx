// import React, { useEffect, useState, FormEvent } from "react";
// import { useTranslation } from "react-i18next";
// import "./AdminTestimonials.css";

// /* -----------------------------------
//    1) TESTIMONIAL INTERFACES & STATE
// ----------------------------------- */
// interface Testimonial {
//   id: number;
//   userName: string;
//   message: string;
//   approved: boolean;
// }

// /* -----------------------------------
//    2) LANGUAGE INTERFACES & STATE
// ----------------------------------- */
// interface LanguageItem {
//   id: number;
//   icon: string;
//   name: string;
// }

// const AdminTestimonials: React.FC = () => {
//   const { t } = useTranslation();

//   /* -----------------------------------
//      TESTIMONIALS MANAGEMENT
//   ----------------------------------- */
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

//   useEffect(() => {
//     fetch("https://portfolio-hichem-benzair.onrender.com/testimonials/all")
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//       .catch((error) => console.error("Error fetching all testimonials:", error));
//   }, []);

//   const toggleApproval = async (testimonial: Testimonial) => {
//     const endpoint = testimonial.approved
//       ? `https://portfolio-hichem-benzair.onrender.com/testimonials/${testimonial.id}/disapprove`
//       : `https://portfolio-hichem-benzair.onrender.com/testimonials/${testimonial.id}/approve`;

//     try {
//       await fetch(endpoint, { method: "PUT" });
//       setTestimonials((prev) =>
//         prev.map((t) =>
//           t.id === testimonial.id ? { ...t, approved: !t.approved } : t
//         )
//       );
//     } catch (error) {
//       console.error("Error toggling testimonial approval:", error);
//     }
//   };

//   const deleteTestimonial = async (id: number) => {
//     if (!window.confirm(t("confirm_delete_testimonial"))) return;

//     try {
//       await fetch(
//         `https://portfolio-hichem-benzair.onrender.com/testimonials/${id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       setTestimonials((prev) => prev.filter((t) => t.id !== id));
//     } catch (error) {
//       console.error("Error deleting testimonial:", error);
//     }
//   };

//   /* -----------------------------------
//      LANGUAGES MANAGEMENT
//   ----------------------------------- */
//   const [languages, setLanguages] = useState<LanguageItem[]>([]);
//   const [newIcon, setNewIcon] = useState("");
//   const [newName, setNewName] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [editingLanguageId, setEditingLanguageId] = useState<number | null>(
//     null
//   );

//   const fetchLanguages = () => {
//     fetch("https://portfolio-hichem-benzair.onrender.com/api/languages")
//       .then((res) => res.json())
//       .then((data) => setLanguages(data))
//       .catch((error) => console.error("Error fetching languages:", error));
//   };

//   useEffect(() => {
//     fetchLanguages();
//   }, []);

//   const handleEditLanguage = (langItem: LanguageItem) => {
//     setEditMode(true);
//     setEditingLanguageId(langItem.id);
//     setNewIcon(langItem.icon);
//     setNewName(langItem.name);
//   };

//   const handleAddLanguage = async (e: FormEvent) => {
//     e.preventDefault();
//     if (!newIcon.trim() || !newName.trim()) {
//       alert(t("please_fill_all_fields"));
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://portfolio-hichem-benzair.onrender.com/api/languages",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ icon: newIcon, name: newName }),
//         }
//       );

//       if (!response.ok) throw new Error("Failed to add language");

//       const addedLanguage = await response.json();

//       setLanguages((prev) => [...prev, addedLanguage]);

//       setNewIcon("");
//       setNewName("");
//     } catch (error) {
//       console.error("Error adding language:", error);
//     }
//   };

//   const handleRemoveLanguage = async (id: number) => {
//     if (!window.confirm(t("confirm_delete_language"))) return;

//     try {
//       await fetch(
//         `https://portfolio-hichem-benzair.onrender.com/api/languages/${id}`,
//         {
//           method: "DELETE",
//         }
//       );
//       setLanguages((prev) => prev.filter((lang) => lang.id !== id));
//     } catch (error) {
//       console.error("Error deleting language:", error);
//     }
//   };

//   const handleCancelEdit = () => {
//     setEditMode(false);
//     setEditingLanguageId(null);
//     setNewIcon("");
//     setNewName("");
//   };

//   return (
//     <div className="admin-section">
//       {/* Testimonials Management */}
//       <div className="admin-testimonials">
//         <h2>{t("admin_dashboard_testimonials")}</h2>
//         <div className="table-responsive">
//           <table className="admin-testimonials-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>{t("user_name")}</th>
//                 <th>{t("message")}</th>
//                 <th>{t("approved")}</th>
//                 <th>{t("action")}</th>
//               </tr>
//             </thead>
//             <tbody>
//               {testimonials.map((testimonial) => (
//                 <tr key={testimonial.id}>
//                   <td>{testimonial.id}</td>
//                   <td>{testimonial.userName}</td>
//                   <td>{testimonial.message}</td>
//                   <td>{testimonial.approved ? t("yes") : t("no")}</td>
//                   <td>
//                     <button onClick={() => toggleApproval(testimonial)}>
//                       {testimonial.approved ? t("hide") : t("show")}
//                     </button>
//                     <button onClick={() => deleteTestimonial(testimonial.id)}>
//                       {t("delete")}
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Languages Management */}
//       <div className="admin-languages">
//         <h2>{t("admin_languages")}</h2>
//         <div className="languages-list">
//           {languages.map((langItem) => (
//             <div key={langItem.id} className="language-item">
//               <img
//                 src={langItem.icon}
//                 alt={`${t(langItem.name)} Icon`}
//                 className="icon"
//               />
//               <span className="icon-label">{t(langItem.name)}</span>
//               <button
//                 className="remove-btn"
//                 onClick={() => handleRemoveLanguage(langItem.id)}
//               >
//                 {t("remove")}
//               </button>
//               <button
//                 className="edit-btn"
//                 onClick={() => handleEditLanguage(langItem)}
//                 style={{ marginLeft: "8px" }}
//               >
//                 {t("edit")}
//               </button>
//             </div>
//           ))}
//         </div>
//         <form onSubmit={handleAddLanguage} className="add-language-form">
//           <h3>{editMode ? t("edit_language") : t("add_language")}</h3>
//           <div className="form-group">
//             <label>{t("language_icon_url")}</label>
//             <input
//               type="text"
//               value={newIcon}
//               onChange={(e) => setNewIcon(e.target.value)}
//               placeholder="https://..."
//             />
//           </div>
//           <div className="form-group">
//             <label>{t("language_name")}</label>
//             <input
//               type="text"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//               placeholder={t("language_name_placeholder") as string}
//             />
//           </div>
//           {editMode ? (
//             <div>
//               <button type="submit" className="add-btn">
//                 {t("update")}
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancelEdit}
//                 style={{ marginLeft: "8px" }}
//               >
//                 {t("cancel")}
//               </button>
//             </div>
//           ) : (
//             <button type="submit" className="add-btn">
//               {t("add")}
//             </button>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminTestimonials;























import React, { useEffect, useState, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import "./AdminTestimonials.css";

/* -----------------------------------
   1) TESTIMONIAL INTERFACES & STATE
----------------------------------- */
interface Testimonial {
  id: number;
  userName: string;
  message: string;
  approved: boolean;
}

/* -----------------------------------
   2) LANGUAGE INTERFACES & STATE
----------------------------------- */
interface LanguageItem {
  id: number;
  icon: string;
  name: string;
}

const AdminTestimonials: React.FC = () => {
  const { t } = useTranslation();

  /* -----------------------------------
     TESTIMONIALS MANAGEMENT
  ----------------------------------- */
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("https://portfolio-hichem-benzair.onrender.com/testimonials/all")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching all testimonials:", error));
  }, []);

  const toggleApproval = async (testimonial: Testimonial) => {
    const endpoint = testimonial.approved
      ? `https://portfolio-hichem-benzair.onrender.com/testimonials/${testimonial.id}/disapprove`
      : `https://portfolio-hichem-benzair.onrender.com/testimonials/${testimonial.id}/approve`;

    try {
      await fetch(endpoint, { method: "PUT" });
      setTestimonials((prev) =>
        prev.map((t) =>
          t.id === testimonial.id ? { ...t, approved: !t.approved } : t
        )
      );
    } catch (error) {
      console.error("Error toggling testimonial approval:", error);
    }
  };

  const deleteTestimonial = async (id: number) => {
    if (!window.confirm(t("confirm_delete_testimonial"))) return;

    try {
      await fetch(
        `https://portfolio-hichem-benzair.onrender.com/testimonials/${id}`,
        {
          method: "DELETE",
        }
      );
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  /* -----------------------------------
     LANGUAGES MANAGEMENT
  ----------------------------------- */
  const [languages, setLanguages] = useState<LanguageItem[]>([]);
  const [newIcon, setNewIcon] = useState("");
  const [newName, setNewName] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editingLanguageId, setEditingLanguageId] = useState<number | null>(
    null
  );

  const fetchLanguages = () => {
    fetch("https://portfolio-hichem-benzair.onrender.com/api/languages")
      .then((res) => res.json())
      .then((data) => setLanguages(data))
      .catch((error) => console.error("Error fetching languages:", error));
  };

  useEffect(() => {
    fetchLanguages();
  }, []);

  const handleEditLanguage = (langItem: LanguageItem) => {
    setEditMode(true);
    setEditingLanguageId(langItem.id);
    setNewIcon(langItem.icon);
    setNewName(langItem.name);
  };

  const handleAddLanguage = async (e: FormEvent) => {
    e.preventDefault();
    if (!newIcon.trim() || !newName.trim()) {
      alert(t("please_fill_all_fields"));
      return;
    }

    try {
      const response = await fetch(
        "https://portfolio-hichem-benzair.onrender.com/api/languages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ icon: newIcon, name: newName }),
        }
      );

      if (!response.ok) throw new Error("Failed to add language");

      const addedLanguage = await response.json();
      setLanguages((prev) => [...prev, addedLanguage]);

      setNewIcon("");
      setNewName("");

      // Notify LanguagesSection.tsx to refresh immediately
      window.dispatchEvent(new Event("languageUpdated"));
    } catch (error) {
      console.error("Error adding language:", error);
    }
  };

  return (
    <div className="admin-section">
      {/* Testimonials Management */}
      <div className="admin-testimonials">
        <h2>{t("admin_dashboard_testimonials")}</h2>
        <div className="table-responsive">
          <table className="admin-testimonials-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>{t("user_name")}</th>
                <th>{t("message")}</th>
                <th>{t("approved")}</th>
                <th>{t("action")}</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((testimonial) => (
                <tr key={testimonial.id}>
                  <td>{testimonial.id}</td>
                  <td>{testimonial.userName}</td>
                  <td>{testimonial.message}</td>
                  <td>{testimonial.approved ? t("yes") : t("no")}</td>
                  <td>
                    <button onClick={() => toggleApproval(testimonial)}>
                      {testimonial.approved ? t("hide") : t("show")}
                    </button>
                    <button onClick={() => deleteTestimonial(testimonial.id)}>
                      {t("delete")}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Languages Management */}
      <div className="admin-languages">
        <h2>{t("admin_languages")}</h2>
        <div className="languages-list">
          {languages.map((langItem) => (
            <div key={langItem.id} className="language-item">
              <img
                src={langItem.icon}
                alt={`${t(langItem.name)} Icon`}
                className="icon"
              />
              <span className="icon-label">{t(langItem.name)}</span>
              <button
                className="remove-btn"
                onClick={() => deleteTestimonial(langItem.id)}
              >
                {t("remove")}
              </button>
              <button
                className="edit-btn"
                onClick={() => handleEditLanguage(langItem)}
                style={{ marginLeft: "8px" }}
              >
                {t("edit")}
              </button>
            </div>
          ))}
        </div>
        <form onSubmit={handleAddLanguage} className="add-language-form">
          <h3>{editMode ? t("edit_language") : t("add_language")}</h3>
          <div className="form-group">
            <label>{t("language_icon_url")}</label>
            <input
              type="text"
              value={newIcon}
              onChange={(e) => setNewIcon(e.target.value)}
              placeholder="https://..."
            />
          </div>
          <div className="form-group">
            <label>{t("language_name")}</label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder={t("language_name_placeholder") as string}
            />
          </div>
          {editMode ? (
            <div>
              <button type="submit" className="add-btn">
                {t("update")}
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditMode(false);
                  setEditingLanguageId(null);
                  setNewIcon("");
                  setNewName("");
                }}
                style={{ marginLeft: "8px" }}
              >
                {t("cancel")}
              </button>
            </div>
          ) : (
            <button type="submit" className="add-btn">
              {t("add")}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminTestimonials;
