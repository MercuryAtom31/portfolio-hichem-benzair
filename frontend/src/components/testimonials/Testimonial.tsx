// import React, { useEffect, useState } from "react";
// import "./Testimonial.css"; // Ensure CSS file is imported

// interface Testimonial {
//   id: number;
//   userName: string;
//   message: string;
// }

// const TestimonialSection = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
//   const [userName, setUserName] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetch("https://portfolio-hichem-benzair.onrender.com/testimonials")
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//       .catch((error) => console.error("Error fetching testimonials:", error));
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!userName.trim() || !message.trim()) {
//       alert("Both fields are required!");
//       return;
//     }
  
//     const newTestimonial = { userName, message };
  
//     try {
//       const res = await fetch("https://portfolio-hichem-benzair.onrender.com/testimonials", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(newTestimonial),
//       });
//       if (!res.ok) throw new Error("Failed to add testimonial");
  
//       // Optionally show success message or something
//       alert("Your testimonial was submitted and is pending admin approval!");
  
//       // Instead of adding the new testimonial to local state,
//       // re-fetch the *approved* testimonials so only approved items are displayed.
//       fetchApprovedTestimonials();
  
//       // Clear form fields
//       setUserName("");
//       setMessage("");
//     } catch (error) {
//       console.error("Error submitting testimonial:", error);
//     }
//   };
  
//   const fetchApprovedTestimonials = () => {
//     fetch("https://portfolio-hichem-benzair.onrender.com/testimonials")
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//       .catch((error) => console.error("Error fetching testimonials:", error));
//   };
  
//   // useEffect calls fetchApprovedTestimonials() on mount
//   useEffect(() => {
//     fetchApprovedTestimonials();
//   }, []);
  

//   return (
//     <div className="testimonials-section">
//       <h2>Testimonials</h2>

//       {/* Form for adding a new testimonial */}
//       <form onSubmit={handleSubmit} className="testimonial-form">
//         <input
//           type="text"
//           placeholder="Your Name"
//           value={userName}
//           onChange={(e) => setUserName(e.target.value)}
//           required
//         />
//         <textarea
//           placeholder="Write your testimonial..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>
//         <button type="submit">Submit</button>
//       </form>

//       {/* Display testimonials */}
//       <div className="testimonial-cards">
//         {testimonials.length > 0 ? (
//           testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="testimonial-card">
//               <p>"{testimonial.message}"</p>
//               <h4>- {testimonial.userName}</h4>
//             </div>
//           ))
//         ) : (
//           <p>No testimonials yet. Be the first to write one!</p>
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
    fetch("https://portfolio-hichem-benzair.onrender.com/testimonials")
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
      const res = await fetch("https://portfolio-hichem-benzair.onrender.com/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTestimonial),
      });
      if (!res.ok) throw new Error("Failed to add testimonial");

      alert("Your testimonial was submitted and is pending admin approval!");
      fetchApprovedTestimonials();

      // Clear form fields
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
      {/* Updated heading text */}
      <h2>Leave me a testimonial Thank you kindly</h2>

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
