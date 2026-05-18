package com.example.portfolio.portfolio.repository;

import com.example.portfolio.portfolio.entity.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRepository extends JpaRepository<Resume, Long> {
}
