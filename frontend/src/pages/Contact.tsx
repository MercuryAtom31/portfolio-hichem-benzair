import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";
import Swal from "sweetalert2";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  // State for form values
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create FormData from the current state
    const formData = new FormData();
    formData.append("access_key", "5f044948-2d16-462b-8164-8cb98e1013f6");
    formData.append("name", formValues.name);
    formData.append("email", formValues.email);
    formData.append("message", formValues.message);

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: t("thank_you_kindly"),
          text: t("message_sent_successfully"),
          icon: "success",
        });

        // Reset form values
        setFormValues({ name: "", email: "", message: "" });
      }
    } catch (error) {
      Swal.fire({
        title: t("oops"),
        text: t("something_went_wrong_try_again_later"),
        icon: "error",
      });
    }
  };

  return (
    <section className="contact">
      <form onSubmit={onSubmit}>
        <h2>{t("contact_form")}</h2>
        <div className="input-box">
          <label>{t("full_name")}</label>
          <input
            type="text"
            className="field"
            placeholder={t("enter_your_name")}
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-box">
          <label>{t("email_address")}</label>
          <input
            type="email"
            className="field"
            placeholder={t("enter_your_email")}
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-box">
          <label>{t("your_message")}</label>
          <textarea
            name="message"
            className="field mess"
            placeholder={t("enter_your_message")}
            value={formValues.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <button type="submit">{t("send_message")}</button>
      </form>
    </section>
  );
};

export default Contact;
