package com.example.portfolio.portfolio.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Resume")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Resume {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String resumeUrl;
}
