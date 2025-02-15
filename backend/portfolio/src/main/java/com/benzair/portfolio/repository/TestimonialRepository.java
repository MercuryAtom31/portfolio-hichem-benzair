package com.benzair.portfolio.repository;

import com.benzair.portfolio.model.Testimonial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface TestimonialRepository extends JpaRepository<Testimonial, Long> {

    @Query("SELECT t FROM Testimonial t WHERE t.approved = true")
    List<Testimonial> findApprovedTestimonials();
}
