package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.entity.Project;
import com.example.portfolio.portfolio.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public Project addProject(Project project) {
        return projectRepository.save(project);
    }
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }

    public Project getProject(Long id) {
        return projectRepository.findById(id).orElse(null);
    }

    public String deleteProject(Long id) {
        projectRepository.deleteById(id);
        return "Project with id " + id + " has been deleted";
    }
}
