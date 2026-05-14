package com.example.portfolio.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "project")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    private String techStack;

    private String githubLink;

    private String liveLink;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String imageUrl;
}
