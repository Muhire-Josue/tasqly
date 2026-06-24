package com.backend.auth.security;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "tasqly.security.jwt")
public record JwtProperties(
        String secret,
        String issuer,
        long expirationMinutes

) {

}
