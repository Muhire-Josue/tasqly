package com.backend.auth.controller;


import com.backend.auth.SignupService;
import com.backend.auth.dto.SignupDto;
import com.backend.auth.dto.SignupResponse;
import com.backend.common.error.ApiErrorResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class SignupController {
    private final SignupService service;

    public SignupController(SignupService service) {
        this.service = service;
    }

    @Operation(
            summary = "Register a new user",
            description = "Creates a new Tasqly user account and returns a JWT access token."
    )
    @ApiResponse(

            responseCode = "201",

            description = "User registered successfully",

            content = @Content(

                    mediaType = "application/json"
            )

    )
    @ApiResponse(
            responseCode = "400",
            description = "Invalid request body",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = ApiErrorResponse.class)
            )
    )

    @ApiResponse(
            responseCode = "409",
            description = "Email is already registered",
            content = @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = ApiErrorResponse.class),
                    examples = @ExampleObject(
                            value = """
                                    {
                                      "timestamp": "2026-06-19T18:30:00Z",
                                      "status": 409,
                                      "error": "Conflict",
                                      "message": "Email is already registered",
                                      "path": "/api/auth/signup"
                                    }
                                    """
                    )
            )
    )
    @PostMapping("/signup")
    public ResponseEntity<SignupResponse> signup(@Valid @RequestBody SignupDto formData) {
        SignupResponse response = service.save(formData);

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
