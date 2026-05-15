package com.example.portfolio.portfolio.controller;

import com.example.portfolio.portfolio.entity.Project;

import com.example.portfolio.portfolio.service.ProjectService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ProjectController {

    private final ProjectService projectService;

    @GetMapping
    public List<Project> getProjects() {

        return projectService.getProjects();
    }

    @PostMapping
    public Project createProject(
            @RequestBody Project project
    ) {

        return projectService.createProject(project);
    }

    @PutMapping("/{id}")
    public Project updateProject(
            @PathVariable Long id,
            @RequestBody Project project
    ) {

        return projectService.updateProject(
                id,
                project
        );
    }

    @DeleteMapping("/{id}")
    public String deleteProject(
            @PathVariable Long id
    ) {

        return projectService.deleteProject(id);
    }
}