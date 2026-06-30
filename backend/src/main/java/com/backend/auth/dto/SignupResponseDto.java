package com.backend.auth.dto;

import com.backend.common.Roles;

public record SignupResponseDto(
        long id,
        String name,
        String email,
        String token,
        Roles role
) {
}
