package com.benzair.portfolio.mapper;

import com.benzair.portfolio.dto.TestimonialRequestModel;
import com.benzair.portfolio.model.Testimonial;
import org.springframework.stereotype.Component;

@Component
public class TestimonialRequestMapper {
    public Testimonial toEntity(TestimonialRequestModel requestModel) {
        return Testimonial.builder()
                .userName(requestModel.getUserName())
                .message(requestModel.getMessage())
                .approved(false) // Default is false, admin must approve it
                .build();
    }
}
