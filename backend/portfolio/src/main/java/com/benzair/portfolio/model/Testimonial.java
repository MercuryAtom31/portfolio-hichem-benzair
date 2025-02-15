package com.benzair.portfolio.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "testimonials")
public class Testimonial {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    
    @Column(columnDefinition = "TEXT")
    private String message;

    private boolean approved; // Admin controls if it's displayed
}
