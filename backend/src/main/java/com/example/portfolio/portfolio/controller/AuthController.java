package com.example.portfolio.portfolio.controller;

import com.example.portfolio.portfolio.dto.AuthRequest;
import com.example.portfolio.portfolio.dto.RegisterRequest;
import com.example.portfolio.portfolio.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public String login(@RequestBody AuthRequest request) {
        return authService.login(request);
    }

    @PostMapping("/register")
    public String login(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }
}
