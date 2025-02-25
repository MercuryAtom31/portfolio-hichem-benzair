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
   - BaseLanguageItem: no 'id'
   - LanguageItem: extends base + adds 'id'
----------------------------------- */
interface BaseLanguageItem {
  icon: string;
  name: string;
}

interface LanguageItem extends BaseLanguageItem {
  id: number;
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

  // Approve/Disapprove a testimonial
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

  // Delete a testimonial
  const deleteTestimonial = async (id: number) => {
    if (!window.confirm(t("confirm_delete_testimonial"))) {
      return;
    }
    try {
      await fetch(`https://portfolio-hichem-benzair.onrender.com/testimonials/${id}`, {
        method: "DELETE",
      });
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  /* -----------------------------------
     LANGUAGES MANAGEMENT
  ----------------------------------- */

  // 1) Define your base arrays without 'id'
  const initialTopRow: BaseLanguageItem[] = [
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/html5/html5-original.svg", name: "HTML5" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/css3/css3-original.svg", name: "CSS3" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/javascript/javascript-original.svg", name: "JavaScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/typescript/typescript-original.svg", name: "TypeScript" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/mysql/mysql-original.svg", name: "MySQL" },
  ];

  const initialMiddleRow: BaseLanguageItem[] = [
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/android/android-original.svg", name: "Android" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/arduino/arduino-original.svg", name: "Arduino" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/raspberrypi/raspberrypi-original.svg", name: "Raspberry Pi" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/kotlin/kotlin-original.svg", name: "Kotlin" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/java/java-original.svg", name: "Java" },
  ];

  const initialBottomRow: BaseLanguageItem[] = [
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/csharp/csharp-original.svg", name: "C#" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/androidstudio/androidstudio-original.svg", name: "Android Studio" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/xcode/xcode-original.svg", name: "Xcode" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/react/react-original.svg", name: "React" },
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/docker/docker-original.svg", name: "Docker" },
    // Example additional language
    { icon: "https://raw.githubusercontent.com/devicons/devicon/develop/icons/apachespark/apachespark-original.svg", name: "Apache Spark" },
  ];

  // 2) Combine & map them to add 'id'
  const combinedInitialLanguages: LanguageItem[] = [
    ...initialTopRow,
    ...initialMiddleRow,
    ...initialBottomRow
  ].map((lang, index) => ({
    ...lang,
    id: index,
  }));

  // 3) Manage languages in state
  const [languages, setLanguages] = useState<LanguageItem[]>(combinedInitialLanguages);
  const [newIcon, setNewIcon] = useState("");
  const [newName, setNewName] = useState("");

  const handleAddLanguage = (e: FormEvent) => {
    e.preventDefault();
    if (!newIcon.trim() || !newName.trim()) {
      alert(t("please_fill_all_fields"));
      return;
    }
    // Create a new language with an incremental ID
    const newLanguage: LanguageItem = {
      icon: newIcon,
      name: newName,
      id: languages.length, 
    };
    setLanguages([...languages, newLanguage]);
    setNewIcon("");
    setNewName("");
  };

  const handleRemoveLanguage = (id: number) => {
    setLanguages(languages.filter((lang) => lang.id !== id));
  };

  /* -----------------------------------
     RENDERING
  ----------------------------------- */
  return (
    <div className="admin-section">
      {/* TESTIMONIALS */}
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
                    <button
                      onClick={() => deleteTestimonial(testimonial.id)}
                      style={{ marginLeft: "8px" }}
                    >
                      {t("delete")}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* LANGUAGES */}
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
                onClick={() => handleRemoveLanguage(langItem.id)}
              >
                {t("remove")}
              </button>
            </div>
          ))}
        </div>

        <form onSubmit={handleAddLanguage} className="add-language-form">
          <h3>{t("add_language")}</h3>
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
          <button type="submit" className="add-btn">
            {t("add")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminTestimonials;
