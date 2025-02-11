import React, { useEffect, useState } from "react";


interface Testimonial {
  id: number;
  userName: string;
  message: string;
}

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.message}"</p>
            <h4>- {testimonial.userName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
