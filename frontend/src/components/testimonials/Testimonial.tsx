import React, { useCallback, useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL =
    import.meta.env.VITE_API_BASE_URL ||
    "https://portfolio-hichem-benzair.onrender.com";
  const cacheKey = "testimonials_cache";

  const fetchApprovedTestimonials = useCallback(
    async (signal?: AbortSignal) => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`${API_BASE_URL}/testimonials`, { signal });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setTestimonials(data);
        try {
          localStorage.setItem(cacheKey, JSON.stringify(data));
        } catch (storageError) {
          console.warn("Unable to cache testimonials:", storageError);
        }
      } catch (fetchError) {
        if (fetchError instanceof DOMException && fetchError.name === "AbortError") {
          return;
        }
        console.error("Error fetching testimonials:", fetchError);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    },
    [API_BASE_URL]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !message.trim()) {
      alert(t("alert_both_required"));
      return;
    }

    const newTestimonial = { userName, message };

    try {
      const res = await fetch(
        `${API_BASE_URL}/testimonials`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newTestimonial),
        }
      );
      if (!res.ok) throw new Error("Failed to add testimonial");

      alert(t("alert_testimonial_submitted"));
      await fetchApprovedTestimonials();

      setUserName("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  useEffect(() => {
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed)) {
          setTestimonials(parsed);
        }
      }
    } catch (storageError) {
      console.warn("Unable to read cached testimonials:", storageError);
    }

    const controller = new AbortController();
    fetchApprovedTestimonials(controller.signal);
    return () => controller.abort();
  }, [fetchApprovedTestimonials]);

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
        {loading && testimonials.length === 0 ? (
          <p>{t("loading_testimonials")}</p>
        ) : error && testimonials.length === 0 ? (
          <p>{t("error_testimonials")}</p>
        ) : testimonials.length > 0 ? (
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
