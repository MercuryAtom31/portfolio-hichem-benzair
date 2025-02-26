package com.benzair.portfolio.mapper;

import com.benzair.portfolio.dto.LanguageResponseModel;
import com.benzair.portfolio.model.Language;
import org.springframework.stereotype.Component;

@Component
public class LanguageResponseMapper {
    public LanguageResponseModel toResponse(Language language) {
        LanguageResponseModel responseModel = new LanguageResponseModel();
        responseModel.setId(language.getId());
        responseModel.setName(language.getName());
        responseModel.setIcon(language.getIcon());
        return responseModel;
    }
}
