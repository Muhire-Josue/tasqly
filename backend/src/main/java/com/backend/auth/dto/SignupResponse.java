package com.backend.auth.dto;

import com.backend.common.Roles;

public record SignupResponse(
        long id,
        String name,
        String email,
        String token,
        Roles role
) {
}
