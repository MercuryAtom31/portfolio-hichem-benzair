package com.benzair.portfolio.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import org.springframework.core.env.Environment;

@Configuration
@EnableWebMvc
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            // @Override
            // public void addCorsMappings(CorsRegistry registry) {
            // registry.addMapping("/**") // ✅ Allow all endpoints
            // .allowedOrigins("http://localhost:5173", "http://localhost") // ✅ Add both
            // localhost versions
            // .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // ✅ Allow
            // necessary methods
            // .allowedHeaders("*") // ✅ Allow all headers
            // .exposedHeaders("Authorization") // ✅ Expose auth headers if needed
            // .allowCredentials(true); // ✅ Allow frontend authentication tokens
            // }
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                String allowedOrigins = System.getenv("ALLOWED_ORIGINS");
                if (allowedOrigins == null || allowedOrigins.trim().isEmpty()) {
                    allowedOrigins = "http://localhost:5173,http://localhost";
                }
                registry.addMapping("/**")
                        .allowedOrigins(allowedOrigins.split(","))
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .exposedHeaders("Authorization")
                        .allowCredentials(true);
            }
        };
    }
}
