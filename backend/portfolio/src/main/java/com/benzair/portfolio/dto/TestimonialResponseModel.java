package com.benzair.portfolio.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TestimonialResponseModel {
    private Long id;
    private String userName;
    private String message;
    private boolean approved;
}
