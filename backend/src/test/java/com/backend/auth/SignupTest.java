package com.backend.auth;

import com.backend.BaseIntegrationTest;
import com.backend.auth.dto.SignupDto;
import com.backend.auth.dto.SignupResponse;
import com.backend.auth.repository.SignupRepository;
import com.backend.common.Roles;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.assertj.core.api.Assertions.assertThat;

public class SignupTest extends BaseIntegrationTest {
    @Autowired
    private SignupRepository repository;
    @Autowired
    private SignupService service;

    @BeforeEach
    void cleanUp(){
        repository.deleteAll();
    }
    @Test
    public void register_user_successfully(){

        SignupDto dto = new SignupDto(
                "John Doe",
                "example@email.com",
                "password1234",
                Roles.TENANT
                );

        SignupResponse response = service.save(dto);

        assertThat(response.name()).isEqualTo("John Doe");
        assertThat(response.email()).isEqualTo("example@email.com");
        assertThat(response.role()).isEqualTo(Roles.TENANT);
        assertThat(response.token()).isNotNull();
        assertThat(response.id()).isNotNull();
    }
}
