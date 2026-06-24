package com.backend.auth.dto;

import com.backend.common.Roles;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.time.Instant;

public record SignupDto(
        Long id,
        @NotBlank
        @Size(max = 150)
        String name,
        @NotBlank

        @Email
        @Size(max = 150)
        String email,
        @NotBlank
        @Size(min = 8, max = 100)
        String password,
        @NotBlank
        Roles role,
        Instant createdAt,
        Instant updatedAt
) {
}
