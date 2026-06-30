package com.backend.common.error;

public record FieldErrorResponse(
        String field,
        String message
) {
}
