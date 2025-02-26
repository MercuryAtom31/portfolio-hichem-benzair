package com.benzair.portfolio.service;

import com.benzair.portfolio.dto.LanguageRequestModel;
import com.benzair.portfolio.dto.LanguageResponseModel;

import java.util.List;

public interface LanguageService {
    LanguageResponseModel addLanguage(LanguageRequestModel requestModel);
    List<LanguageResponseModel> getAllLanguages();
    LanguageResponseModel updateLanguage(Long id, LanguageRequestModel requestModel);
    void deleteLanguage(Long id);
}
