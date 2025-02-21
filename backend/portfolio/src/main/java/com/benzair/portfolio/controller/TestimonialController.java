package com.benzair.portfolio.controller;

import com.benzair.portfolio.dto.TestimonialRequestModel;
import com.benzair.portfolio.dto.TestimonialResponseModel;
import com.benzair.portfolio.service.TestimonialService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/testimonials")
public class TestimonialController {

    private final TestimonialService service;

    public TestimonialController(TestimonialService service) {
        this.service = service;
    }

    @PostMapping
    public TestimonialResponseModel addTestimonial(@RequestBody TestimonialRequestModel request) {
        return service.addTestimonial(request);
    }

    @GetMapping
    public List<TestimonialResponseModel> getApprovedTestimonials() {
        return service.getApprovedTestimonials();
    }

    @PutMapping("/{id}/approve")
    public void approveTestimonial(@PathVariable Long id) {
        service.approveTestimonial(id);
    }

    // (Hide) a testimonial
    @PutMapping("/{id}/disapprove")
    public void disapproveTestimonial(@PathVariable Long id) {
        service.disapproveTestimonial(id);
    }

    // Returns all testimonials (approved and unapproved)
    @GetMapping("/all")
    public List<TestimonialResponseModel> getAllTestimonials() {
        return service.getAllTestimonials();
    }

    @DeleteMapping("/{id}")
    public void deleteTestimonial(@PathVariable Long id) {
        service.deleteTestimonial(id);
    }

}
