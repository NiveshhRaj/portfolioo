package com.example.portfolio.portfolio.repository;

import com.example.portfolio.portfolio.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRespository extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String email);
}
