// import React, { useEffect, useState } from "react";
// import './AdminTestimonials.css';

// interface Testimonial {
//   id: number;
//   userName: string;
//   message: string;
//   approved: boolean;
// }

// const AdminTestimonials: React.FC = () => {
//   const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

//   // 1) Replace http://localhost:8080/testimonials/all with your production backend URL
//   useEffect(() => {
//     fetch("https://portfolio-hichem-benzair.onrender.com/testimonials/all")
//       .then((res) => res.json())
//       .then((data) => setTestimonials(data))
//       .catch((error) => console.error("Error fetching all testimonials:", error));
//   }, []);

//   const toggleApproval = async (testimonial: Testimonial) => {
//     // 2) Replace localhost references here with your production backend URL
//     const endpoint = testimonial.approved
//       ? `https://portfolio-hichem-benzair.onrender.com/testimonials/${testimonial.id}/disapprove`
//       : `https://portfolio-hichem-benzair.onrender.com/testimonials/${testimonial.id}/approve`;

//     try {
//       await fetch(endpoint, { method: "PUT" });
//       // Update state so the UI reflects the new approved status
//       setTestimonials((prev) =>
//         prev.map((t) =>
//           t.id === testimonial.id ? { ...t, approved: !t.approved } : t
//         )
//       );
//     } catch (error) {
//       console.error("Error toggling testimonial approval:", error);
//     }
//   };

//   return (
//     <div className="admin-testimonials">
//       <h2>Admin Dashboard - Testimonials</h2>
//       <table className="admin-testimonials-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>User Name</th>
//             <th>Message</th>
//             <th>Approved?</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {testimonials.map((testimonial) => (
//             <tr key={testimonial.id}>
//               <td>{testimonial.id}</td>
//               <td>{testimonial.userName}</td>
//               <td>{testimonial.message}</td>
//               <td>{testimonial.approved ? "Yes" : "No"}</td>
//               <td>
//                 <button onClick={() => toggleApproval(testimonial)}>
//                   {testimonial.approved ? "Hide" : "Show"}
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminTestimonials;












import React, { useEffect, useState } from "react";
import './AdminTestimonials.css';

interface Testimonial {
  id: number;
  userName: string;
  message: string;
  approved: boolean;
}

const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("https://portfolio-hichem-benzair.onrender.com/testimonials/all")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching all testimonials:", error));
  }, []);

  // Approve or disapprove
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

  // **NEW**: Delete testimonial
  const deleteTestimonial = async (id: number) => {
    // Optional confirmation
    if (!window.confirm("Are you sure you want to delete this testimonial?")) {
      return;
    }
    try {
      await fetch(`https://portfolio-hichem-benzair.onrender.com/testimonials/${id}`, {
        method: "DELETE",
      });
      // Remove it from state
      setTestimonials((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  return (
    <div className="admin-testimonials">
      <h2>Admin Dashboard - Testimonials</h2>
      <table className="admin-testimonials-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Message</th>
            <th>Approved?</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {testimonials.map((testimonial) => (
            <tr key={testimonial.id}>
              <td>{testimonial.id}</td>
              <td>{testimonial.userName}</td>
              <td>{testimonial.message}</td>
              <td>{testimonial.approved ? "Yes" : "No"}</td>
              <td>
                {/* Existing approve/hide button */}
                <button onClick={() => toggleApproval(testimonial)}>
                  {testimonial.approved ? "Hide" : "Show"}
                </button>
                {/* New delete button */}
                <button onClick={() => deleteTestimonial(testimonial.id)} style={{ marginLeft: "8px" }}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTestimonials;
