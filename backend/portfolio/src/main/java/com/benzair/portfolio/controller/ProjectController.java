package com.benzair.portfolio.controller;

import com.benzair.portfolio.model.Project;
import com.benzair.portfolio.service.ProjectService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*") // Allow frontend access
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects().stream()
            .map(project -> {
                project.setImagePath("http://localhost:8080" + project.getImagePath());
                return project;
            })
            .collect(Collectors.toList());
    }
}
