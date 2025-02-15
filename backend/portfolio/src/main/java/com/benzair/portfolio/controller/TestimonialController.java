package com.benzair.portfolio.controller;

import com.benzair.portfolio.dto.TestimonialRequestModel;
import com.benzair.portfolio.dto.TestimonialResponseModel;
import com.benzair.portfolio.service.TestimonialService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/testimonials") // Changed from singular to match frontend
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
}
