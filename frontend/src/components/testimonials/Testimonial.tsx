// import React, { useEffect, useState } from "react";


// interface Testimonial {
//   id: number;
//   userName: string;
//   message: string;
// }

// const TestimonialSection = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:8080/testimonials")
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data));
//   }, []);

//   return (
//     <div className="testimonials">
//       <h2>Testimonials</h2>
//       <div className="testimonial-cards">
//         {testimonials.map((testimonial) => (
//           <div key={testimonial.id} className="testimonial-card">
//             <p>"{testimonial.message}"</p>
//             <h4>- {testimonial.userName}</h4>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialSection;



import React, { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  userName: string;
  message: string;
}

const TestimonialSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/testimonials") // ✅ Matches backend
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        return res.json();
      })
      .then((data) => setTestimonials(data))
      .catch((error) => console.error(error)); // ✅ Logs errors
  }, []); // ✅ Runs only once

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-cards">
        {testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <p>"{testimonial.message}"</p>
              <h4>- {testimonial.userName}</h4>
            </div>
          ))
        ) : (
          <p>No testimonials available.</p> // ✅ Prevents blank UI
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
