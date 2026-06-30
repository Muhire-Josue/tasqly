package com.backend.auth;

import com.backend.auth.dto.SignupDto;
import com.backend.auth.dto.SignupResponseDto;
import com.backend.auth.entity.UserEntity;
import com.backend.auth.repository.SignupRepository;
import com.backend.common.Roles;
import com.backend.common.exceptions.ConflictException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public SignupResponseDto save(SignupDto dto) {
        Optional<UserEntity> user = repository.findByEmail(dto.email());
        if (user.isPresent()) {
            throw new ConflictException("Email is already registered");
        }
        String passwordHash = passwordEncoder.encode(dto.password());
        Roles role = Roles.valueOf(dto.role().toString());

        UserEntity userEntity =  new UserEntity(
                null,
                dto.name(),
                dto.email(),
                passwordHash,
                role,
                null,
                null
        );

        UserEntity savedUser = repository.save(userEntity);
        String jwtToken = jwtService.generateAccessToken(savedUser.getId(), savedUser.getEmail());
        return new SignupResponseDto(savedUser.getId(), savedUser.getName(), savedUser.getEmail(), jwtToken, userEntity.getRole());
    }
}
