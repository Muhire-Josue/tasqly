# 🧱 Tasqly Backend – High-Level Architecture

![alt text](logo.png)

## 1. Overview

The Tasqly backend is a modular monolith built with Java 17 and Spring Boot, structured using Spring Modulith.
It exposes a GraphQL API to the mobile client, manages all shared-living business logic, and integrates with AWS for file storage and notifications.

The architecture emphasizes:
- clear domain boundaries
- maintainability
- clean separation of features
- testability (unit, integration, boundary tests)

## 2 Tech Stack
- Language: Java 17
- Framework: Spring Boot
- Architecture: Modular Monolith via Spring Modulith
- API Interface: GraphQL
- Database: PostgreSQL
- Migrations: Liquibase
- Persistence: Spring Data JPA
- Testing:
- JUnit 5
- Spring Boot Test
- Testcontainers (PostgreSQL)
- Spring Modulith Boundary Testing
- Build Tool: Maven
- Authentication: JWT + optional social login support (logic)

## 3. Modular Monolith Architecture (Spring Modulith)

The backend is organized into feature-based modules, each responsible for its own domain logic.

3.1 Proposed Modules

User Module
- User profiles
- Roles (TENANT, LANDLORD)
- Social login integration logic

Household Module
- Household creation
- Member relationships
- User–household linking

Task Module
- Task creation & editing
- Due dates & priorities
- Assignment workflow
- Recurrence rules
- Completion & archive logic

Comment Module
- Comment threads for tasks & repairs
- Timestamping & authorship

Repair Module
- Submission of repair requests
- Status transitions (submitted -> scheduled -> completed)

Receipt Module
- Receipt metadata
- Linking to tasks/households

Notification Module
- Notification logic (InApp, Email & Push Notification)

File Storage Module
- S3 upload services
- Pre-signed URL generation

Each module interacts via public services, never by reaching into another module’s repository.

## 4. Java 17 Usage
The codebase uses Java 17 without overengineering, balancing clarity and power.

## 5. GraphQL API

The backend provides a GraphQL API used by the mobile app.

Queries
- user – current user/profile
- household – members, details
- tasks – filterable task list
- task(id) – task details, comments
- repairRequests – tenant/landlord views
- receipts – household/task receipts

Mutations
- createTask, updateTask, deleteTask
- assignTask, updateAssignmentStatus
- addComment
- createRepairRequest, updateRepairStatus
- uploadReceiptMetadata
- completeTask, archiveTask

Potential Subscriptions (future)
- taskUpdated
- repairUpdated

Resolvers remain thin; logic lives within respective modules.

## 6. Database (PostgreSQL)

Tasqly uses PostgreSQL as the primary RDBMS.

### 6.1 Data Stored

Postgres stores all persistent domain data:
- Users
- Households
- Tasks
- Assignments
- Recurrence rules
- Comments
- Repairs
- Receipts

### 6.2 Access Layer
- Spring Data JPA repositories, private to modules
- Only exposed through internal module services
- No cross-module JPA access allowed

### 6.3 Local Development
- Dockerized PostgreSQL instance
- Schema created & updated via Liquibase migrations
- Testcontainers for integration tests to mirror production behavior

## 7. Database Migrations (Liquibase)

Tasqly uses Liquibase to version, apply, and track all schema changes.

### 7.1 Why Liquibase?

- Reliable migration flow
- Supports rollback strategies
- Works consistently in CI/CD pipelines
- Supports SQL, YAML, JSON, and XML formats
- Integrates seamlessly with Spring Boot

### 7.2 Migration Strategy
- All schema changes go through Liquibase
- No manual DB changes (production or local)
- Versioned migrations ensure consistent environments
- CI verifies Liquibase scripts via integration tests

## 8. Domain Model (High-Level)

Key aggregates:
- User – identity, role, social auth linkage
- Household – group of tenants/roommates
- Task – details, due date, recurrence info
- TaskAssignment – assignment + status lifecycle
- RecurrenceRule – repeating schedule rules
- Comment – messages linked to tasks or repairs
- RepairRequest – maintenance workflow
- Receipt – metadata + S3 key

Modules own their domain models independently.

## 9. Testing Strategy

### 9.1 Unit Testing

Tests include:
- Recurrence logic
- Task assignment transitions
- Comment creation logic
- Repair status transitions
- Internal rules based on roles

### 9.2 Integration Testing
- GraphQL -> service -> repository flow
- Testcontainers PostgreSQL for realistic DB behavior
- Liquibase migrations applied
- File reference logic tested with mocks

### 9.3 Modulith Boundary Tests

Spring Modulith tools ensure:
- No unauthorized module dependencies
- No repository leakage
- Only public APIs and events are used between modules

This protects the modular structure long-term.

### 9.3 Liquibase naming Testing
Testing if all the migration file fits a naming convension

## 10. Cross-Cutting Concerns

Authentication
- JWT token handling
- Social login orchestration
- Role-based authorization

Validation
- Bean Validation for GraphQL inputs
- Centralized exception handling

Logging
- Structured logs
- Module-level event logging

Configuration
- Spring Profiles (local, dev, test)
- Externalized configuration values (no cloud details)

Authorization
- Spring Security for endpoint authorization

## 11. Package Structure (Example)
```
tasqly/
  application/
  user/
  household/
  task/
  comment/
  repair/
  receipt/
  notification/
  filestorage/
  graphql/
  shared/
```

Each module contains:
- entities
- repositories
- services
- events
- GraphQL resolvers
- tests

## 12. Database Diagram (coming up soon)
## 13. Tables Definition Diagram (coming up soon)