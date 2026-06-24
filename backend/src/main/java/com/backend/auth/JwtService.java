package com.backend.auth;

import java.time.Instant;

import java.time.temporal.ChronoUnit;

import java.util.UUID;

import com.backend.auth.security.JwtProperties;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;

import org.springframework.security.oauth2.jwt.JwtEncoder;

import org.springframework.security.oauth2.jwt.JwtEncoderParameters;

import org.springframework.stereotype.Service;

@Service

public class JwtService {
    private final JwtEncoder jwtEncoder;
    private final JwtProperties jwtProperties;
    public JwtService(JwtEncoder jwtEncoder, JwtProperties jwtProperties) {
        this.jwtEncoder = jwtEncoder;
        this.jwtProperties = jwtProperties;
    }

    public String generateAccessToken(UUID userId, String email) {

        Instant now = Instant.now();

        Instant expiresAt = now.plus(jwtProperties.expirationMinutes(), ChronoUnit.MINUTES);

        JwtClaimsSet claims = JwtClaimsSet.builder()

                .issuer(jwtProperties.issuer())

                .issuedAt(now)

                .expiresAt(expiresAt)

                .subject(userId.toString())

                .claim("email", email)

                .build();

        return jwtEncoder.encode(JwtEncoderParameters.from(claims)).getTokenValue();

    }

}
