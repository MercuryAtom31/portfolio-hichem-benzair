package com.benzair.portfolio.repository;

import com.benzair.portfolio.model.Language;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LanguageRepository extends JpaRepository<Language, Long> {
}
