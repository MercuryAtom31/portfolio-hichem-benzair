// import React, { useEffect, useState } from "react";
// import "./Testimonial.css";


// interface Testimonial {
//   id: number;
//   userName: string;
//   message: string;
// }

// const TestimonialSection = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/testimonials")
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch testimonials");
//         }
//         return res.json();
//       })
//       .then((data) => setTestimonials(data))
//       .catch((error) => console.error(error));
//   }, []);

//   return (
//     <div className="testimonials-container">
//       <h2 className="title">Testimonials</h2>
//       <div className="testimonial-grid">
//         {testimonials.length > 0 ? (
//           testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="testimonial-card">
//               <p className="testimonial-message">"{testimonial.message}"</p>
//               <h4 className="testimonial-user">- {testimonial.userName}</h4>
//             </div>
//           ))
//         ) : (
//           <p className="no-testimonials">No testimonials available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;






import React, { useEffect, useState } from "react";
import "./Testimonial.css"; // Ensure CSS file is imported

interface Testimonial {
  id: number;
  userName: string;
  message: string;
}

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName.trim() || !message.trim()) {
      alert("Both fields are required!");
      return;
    }

    const newTestimonial = { userName, message };

    try {
      const res = await fetch("http://localhost:8080/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTestimonial),
      });

      if (!res.ok) throw new Error("Failed to add testimonial");

      const savedTestimonial = await res.json();
      setTestimonials([...testimonials, savedTestimonial]); // Update the UI
      setUserName(""); // Reset form fields
      setMessage("");
    } catch (error) {
      console.error("Error submitting testimonial:", error);
    }
  };

  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>

      {/* Form for adding a new testimonial */}
      <form onSubmit={handleSubmit} className="testimonial-form">
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your testimonial..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>

      {/* Display testimonials */}
      <div className="testimonial-cards">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p>"{testimonial.message}"</p>
              <h4>- {testimonial.userName}</h4>
            </div>
          ))
        ) : (
          <p>No testimonials yet. Be the first to write one!</p>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
