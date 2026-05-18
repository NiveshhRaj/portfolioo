package com.example.portfolio.portfolio.controller;

import com.example.portfolio.portfolio.entity.Resume;
import com.example.portfolio.portfolio.repository.ResumeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.awt.*;
import java.io.File;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ResumeController {
    private final ResumeRepository resumeRepository;

    @PostMapping(value = "/upload" , consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String uploadResume(
            @RequestParam("file") MultipartFile file
    ) {

        try {

            String uploadDir =
                    System.getProperty("user.dir")
                            + "/uploads/resume/";

            File dir = new File(uploadDir);

            if (!dir.exists()) {

                dir.mkdirs();
            }

            String filePath =
                    uploadDir + file.getOriginalFilename();

            file.transferTo(new File(filePath));

            resumeRepository.deleteAll();

            Resume resume =
                    Resume.builder()
                            .fileName(file.getOriginalFilename())
                            .filePath(filePath)
                            .build();

            resumeRepository.save(resume);

            return "Resume Uploaded";

        }

        catch (Exception e) {

            e.printStackTrace();

            return "Upload Failed";
        }
    }

    @GetMapping
    public Resume getResume() {

        return resumeRepository
                .findAll()
                .stream()
                .findFirst()
                .orElse(null);
    }
}
