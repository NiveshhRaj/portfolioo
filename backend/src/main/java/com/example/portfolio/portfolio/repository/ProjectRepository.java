package com.example.portfolio.portfolio.repository;

import com.example.portfolio.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {

}
