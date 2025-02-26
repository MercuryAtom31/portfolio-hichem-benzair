package com.benzair.portfolio.controller;

import com.benzair.portfolio.dto.LanguageRequestModel;
import com.benzair.portfolio.dto.LanguageResponseModel;
import com.benzair.portfolio.service.LanguageService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/languages") 
public class LanguageController {

    private final LanguageService service;

    public LanguageController(LanguageService service) {
        this.service = service;
    }

    @PostMapping
    public LanguageResponseModel addLanguage(@RequestBody LanguageRequestModel request) {
        return service.addLanguage(request);
    }

    @GetMapping
    public List<LanguageResponseModel> getAllLanguages() {
        return service.getAllLanguages();
    }

    @PutMapping("/{id}")
    public LanguageResponseModel updateLanguage(@PathVariable Long id, @RequestBody LanguageRequestModel request) {
        return service.updateLanguage(id, request);
    }

    @DeleteMapping("/{id}")
    public void deleteLanguage(@PathVariable Long id) {
        service.deleteLanguage(id);
    }
}
