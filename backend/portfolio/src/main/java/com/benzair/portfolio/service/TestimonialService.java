package com.benzair.portfolio.service;

import com.benzair.portfolio.dto.TestimonialRequestModel;
import com.benzair.portfolio.dto.TestimonialResponseModel;
import java.util.List;

public interface TestimonialService {
    TestimonialResponseModel addTestimonial(TestimonialRequestModel requestModel);

    List<TestimonialResponseModel> getApprovedTestimonials();

    void approveTestimonial(Long id);

    List<TestimonialResponseModel> getAllTestimonials();

    void disapproveTestimonial(Long id);
}
