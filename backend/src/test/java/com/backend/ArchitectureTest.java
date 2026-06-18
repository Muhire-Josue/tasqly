package com.backend;

import org.junit.jupiter.api.Test;

import org.springframework.modulith.core.ApplicationModules;

class ArchitectureTest {

    @Test
    void verifiesApplicationModuleStructure() {
        ApplicationModules modules = ApplicationModules.of(BackendApplication.class);
        modules.forEach(module -> System.out.println(module.getName()));
    }

}
