package com.backend.auth.dto;

import com.backend.common.Roles;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.Instant;

public record SignupDto(
        @NotBlank
        @Size(max = 150, message = "Name must be at most 150 characters")
        String name,
        @NotBlank
        @Email
        @Size(max = 150, message = "Email must be at most 150 characters")
        String email,
        @NotBlank
        @Size(min = 8, max = 100, message = "Password must be between 8 and 100 characters")
        String password,
        @NotNull(message = "Role is required")
        Roles role
) {
}
