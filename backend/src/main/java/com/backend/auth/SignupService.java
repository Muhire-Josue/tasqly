package com.backend.auth;

import com.backend.auth.dto.SignupDto;
import com.backend.auth.entity.SignupEntity;
import com.backend.auth.repository.SignupRepository;
import com.backend.common.Roles;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class SignupService {
    private final SignupRepository repository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;

    public SignupService(SignupRepository repository, JwtService jwtService, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
    }

    public String save(SignupDto dto) {
        String passwordHash = passwordEncoder.encode(dto.password());
        Roles role = Roles.valueOf(dto.role().toString());

        SignupEntity signupEntity =  new SignupEntity(
                null,
                dto.name(),
                dto.email(),
                passwordHash,
                role,
                null,
                null
        );

        repository.save(signupEntity);

        return jwtService.generateAccessToken(signupEntity.getId(), signupEntity.getEmail());
    }
}
