package com.benzair.portfolio.mapper;

import com.benzair.portfolio.dto.TestimonialResponseModel;
import com.benzair.portfolio.model.Testimonial;
import org.springframework.stereotype.Component;

@Component
public class TestimonialResponseMapper {
    public TestimonialResponseModel toResponse(Testimonial testimonial) {
        TestimonialResponseModel responseModel = new TestimonialResponseModel();
        responseModel.setId(testimonial.getId());
        responseModel.setUserName(testimonial.getUserName());
        responseModel.setMessage(testimonial.getMessage());
        responseModel.setApproved(testimonial.isApproved());
        return responseModel;
    }
}
