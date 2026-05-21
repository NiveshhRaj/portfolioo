package com.example.portfolio.portfolio.controller;

import com.cloudinary.Cloudinary;

import com.cloudinary.utils.ObjectUtils;

import com.example.portfolio.portfolio.entity.Resume;

import com.example.portfolio.portfolio.repository.ResumeRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

@RestController
@RequestMapping("/api/resume")
@RequiredArgsConstructor
@CrossOrigin("*")
public class ResumeController {

    private final Cloudinary cloudinary;

    private final ResumeRepository resumeRepository;

    @PostMapping("/upload")
    public String uploadResume(

            @RequestParam("file")
            MultipartFile file

    ) {

        try {

            Map uploadResult =

                    cloudinary.uploader().upload(

                            file.getBytes(),

                            ObjectUtils.emptyMap()
                    );

            String url =

                    uploadResult
                            .get("secure_url")
                            .toString();

            resumeRepository.deleteAll();

            Resume resume = new Resume();

            resume.setResumeUrl(url);

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