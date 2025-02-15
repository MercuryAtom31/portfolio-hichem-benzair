package com.benzair.portfolio.service;

import com.benzair.portfolio.dto.TestimonialRequestModel;
import com.benzair.portfolio.dto.TestimonialResponseModel;
import com.benzair.portfolio.mapper.TestimonialRequestMapper;
import com.benzair.portfolio.mapper.TestimonialResponseMapper;
import com.benzair.portfolio.model.Testimonial;
import com.benzair.portfolio.repository.TestimonialRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TestimonialServiceImpl implements TestimonialService {

    private final TestimonialRepository repository;
    private final TestimonialRequestMapper requestMapper;
    private final TestimonialResponseMapper responseMapper;

    public TestimonialServiceImpl(TestimonialRepository repository, 
                                  TestimonialRequestMapper requestMapper, 
                                  TestimonialResponseMapper responseMapper) {
        this.repository = repository;
        this.requestMapper = requestMapper;
        this.responseMapper = responseMapper;
    }

    @Override
    public TestimonialResponseModel addTestimonial(TestimonialRequestModel requestModel) {
        Testimonial testimonial = requestMapper.toEntity(requestModel);
        testimonial = repository.save(testimonial);
        return responseMapper.toResponse(testimonial);
    }

    @Override
    public List<TestimonialResponseModel> getApprovedTestimonials() {
        return repository.findApprovedTestimonials().stream()
                .map(responseMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public void approveTestimonial(Long id) {
        Testimonial testimonial = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Testimonial not found"));
        testimonial.setApproved(true);
        repository.save(testimonial);
    }
}
