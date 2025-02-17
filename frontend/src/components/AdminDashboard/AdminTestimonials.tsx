import React, { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  userName: string;
  message: string;
  approved: boolean;
}

const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/testimonials/all")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching all testimonials:", error));
  }, []);

  const toggleApproval = async (testimonial: Testimonial) => {
    // If currently approved, call /disapprove; otherwise call /approve
    const endpoint = testimonial.approved
      ? `http://localhost:8080/testimonials/${testimonial.id}/disapprove`
      : `http://localhost:8080/testimonials/${testimonial.id}/approve`;

    try {
      await fetch(endpoint, { method: "PUT" });
      // Update state so the UI reflects the new approved status
      setTestimonials((prev) =>
        prev.map((t) =>
          t.id === testimonial.id ? { ...t, approved: !t.approved } : t
        )
      );
    } catch (error) {
      console.error("Error toggling testimonial approval:", error);
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
                <button onClick={() => toggleApproval(testimonial)}>
                  {testimonial.approved ? "Hide" : "Show"}
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
