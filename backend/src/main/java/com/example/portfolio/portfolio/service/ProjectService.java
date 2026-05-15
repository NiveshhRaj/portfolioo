package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.entity.Project;

import com.example.portfolio.portfolio.repository.ProjectRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public List<Project> getProjects() {

        return projectRepository.findAll();
    }

    public Project createProject(
            Project project
    ) {

        return projectRepository.save(project);
    }

    public Project updateProject(
            Long id,
            Project updatedProject
    ) {

        Project existingProject =
                projectRepository.findById(id)
                        .orElseThrow(
                                () -> new RuntimeException(
                                        "Project not found"
                                )
                        );

        existingProject.setTitle(
                updatedProject.getTitle()
        );

        existingProject.setDescription(
                updatedProject.getDescription()
        );

        existingProject.setTechStack(
                updatedProject.getTechStack()
        );

        existingProject.setGithubLink(
                updatedProject.getGithubLink()
        );

        existingProject.setLiveLink(
                updatedProject.getLiveLink()
        );

        existingProject.setImageUrl(
                updatedProject.getImageUrl()
        );

        return projectRepository.save(
                existingProject
        );
    }

    public String deleteProject(
            Long id
    ) {

        projectRepository.deleteById(id);

        return "Project Deleted";
    }

    public Project getProject(Long id) {
        return  projectRepository.findById(id)
                .orElseThrow(null);
    }
}