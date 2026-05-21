package com.example.portfolio.portfolio.config;

import com.cloudinary.Cloudinary;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {

        Map<String, String> config =
                new HashMap<>();

        config.put(
                "dxc1oxviu",
                System.getenv("CLOUDINARY_NAME")
        );

        config.put(
                "858123627665747",
                System.getenv("CLOUDINARY_KEY")
        );

        config.put(
                "2AbkjTl1rConOyGIpGyqFAtDGCM",
                System.getenv("CLOUDINARY_SECRET")
        );

        return new Cloudinary(config);
    }
}