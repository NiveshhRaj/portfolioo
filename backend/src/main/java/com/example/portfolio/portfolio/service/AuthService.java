package com.example.portfolio.portfolio.service;

import com.example.portfolio.portfolio.dto.AuthRequest;
import com.example.portfolio.portfolio.dto.RegisterRequest;
import com.example.portfolio.portfolio.entity.User;
import com.example.portfolio.portfolio.repository.UserRespository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRespository userRespository;
    private final PasswordEncoder passwordEncoder;

    public String register(RegisterRequest request){
        User existingUser = userRespository.findByEmail(request.getEmail()).orElse(null);
        if(existingUser != null){
            return "User already exists";
        }
        User user = User.builder().name(request.getName()).email(request.getEmail()).password(passwordEncoder.encode(request.getPassword())).role("ADMIN").build();
        userRespository.save(user);
        return "User Registered";
    }

    public String login(AuthRequest request){
        User user = userRespository.findByEmail(request.getEmail()).orElse(null);
        if(user == null){
            return "User not found";
        }
        boolean match = passwordEncoder.matches(request.getPassword(), user.getPassword());
        if(!match){return "Wrong password";}
        return "Login Successful";
    }
}
