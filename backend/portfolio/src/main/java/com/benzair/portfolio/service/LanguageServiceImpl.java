package com.benzair.portfolio.service;

import com.benzair.portfolio.dto.LanguageRequestModel;
import com.benzair.portfolio.dto.LanguageResponseModel;
import com.benzair.portfolio.mapper.LanguageRequestMapper;
import com.benzair.portfolio.mapper.LanguageResponseMapper;
import com.benzair.portfolio.model.Language;
import com.benzair.portfolio.repository.LanguageRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class LanguageServiceImpl implements LanguageService {

    private final LanguageRepository repository;
    private final LanguageRequestMapper requestMapper;
    private final LanguageResponseMapper responseMapper;

    public LanguageServiceImpl(LanguageRepository repository, LanguageRequestMapper requestMapper, LanguageResponseMapper responseMapper) {
        this.repository = repository;
        this.requestMapper = requestMapper;
        this.responseMapper = responseMapper;
    }

    @Override
    public LanguageResponseModel addLanguage(LanguageRequestModel requestModel) {
        Language language = requestMapper.toEntity(requestModel);
        language = repository.save(language);
        return responseMapper.toResponse(language);
    }

    @Override
    public List<LanguageResponseModel> getAllLanguages() {
        return repository.findAll().stream()
                .map(responseMapper::toResponse)
                .collect(Collectors.toList());
    }

    @Override
    public LanguageResponseModel updateLanguage(Long id, LanguageRequestModel requestModel) {
        Language language = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Language not found"));
        language.setName(requestModel.getName());
        language.setIcon(requestModel.getIcon());
        repository.save(language);
        return responseMapper.toResponse(language);
    }

    @Override
    public void deleteLanguage(Long id) {
        repository.deleteById(id);
    }
}
