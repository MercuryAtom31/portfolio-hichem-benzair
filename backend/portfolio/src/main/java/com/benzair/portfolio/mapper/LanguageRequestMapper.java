package com.benzair.portfolio.mapper;

import com.benzair.portfolio.dto.LanguageRequestModel;
import com.benzair.portfolio.model.Language;
import org.springframework.stereotype.Component;

@Component
public class LanguageRequestMapper {
    public Language toEntity(LanguageRequestModel requestModel) {
        return Language.builder()
                .name(requestModel.getName())
                .icon(requestModel.getIcon())
                .build();
    }
}
