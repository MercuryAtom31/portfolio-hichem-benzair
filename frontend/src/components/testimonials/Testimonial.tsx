import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Testimonial.css";

interface Testimonial {
  id: number;
  userName: string;
  message: string;
}

const TestimonialSection = () => {
  const { t } = useTranslation();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://portfolio-hichem-benzair.onrender.com/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !message.trim()) {
      alert(t("alert_both_required"));
      return;
    }

    const newTestimonial = { userName, message };

    try {
      const res = await fetch(
        "https://portfolio-hichem-benzair.onrender.com/testimonials",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTestimonial),
        }
      );
      if (!res.ok) throw new Error("Failed to add testimonial");

      alert(t("alert_testimonial_submitted"));
      fetchApprovedTestimonials();

      setUserName("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  const fetchApprovedTestimonials = () => {
    fetch("https://portfolio-hichem-benzair.onrender.com/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  };

  useEffect(() => {
    fetchApprovedTestimonials();
  }, []);

  return (
    <div className="testimonials-section">
      <h2>{t("testimonial_heading")}</h2>
      <form onSubmit={handleSubmit} className="testimonial-form">
        <input
          type="text"
          placeholder={t("placeholder_name")}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <textarea
          placeholder={t("placeholder_message")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">{t("button_submit")}</button>
      </form>
      <div className="testimonial-cards">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p>"{testimonial.message}"</p>
              <h4>- {testimonial.userName}</h4>
            </div>
          ))
        ) : (
          <p>{t("no_testimonials")}</p>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
