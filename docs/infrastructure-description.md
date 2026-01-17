# 🧱 Tasqly Infrastructure – High-Level Architecture

![alt text](logo.png)

## 1. Overview & Goals

This document describes the cloud and DevOps infrastructure design for **Tasqly**, a mobile application built to help roommates and shared households manage tasks, expenses, communication, and landlord interactions.

The goal of this infrastructure is to:

- Follow **real-world cloud architecture best practices**
- Showcase **DevOps and cloud engineering skills** (Kubernetes, AWS, CI/CD, Terraform)
- Remain **cost-effective and student-friendly**
- Be **simple to operate**, yet **easy to scale in the future**
- Align with **industry standards** used in professional environments

Tasqly is designed as a portfolio-grade project. This means the infrastructure is intentionally built to demonstrate:

- Containerization with **Docker**
- Orchestration with **Kubernetes (EKS)**
- **Infrastructure as Code** using Terraform
- **CI/CD automation** with GitHub Actions
- **Secure secret management**
- **Cloud-native storage** and managed services

This infrastructure is **not over-engineered**, but it is also **not a toy setup**. Every architectural decision balances:

- **Learning value**
- **Real-world relevance**
- **Budget constraints**
- **Operational simplicity**

The system is hosted on **Amazon Web Services (AWS)** and uses managed services wherever possible to reduce operational overhead, improve reliability, and follow cloud-native design principles.
## 2. Architecture Principles

The infrastructure for Tasqly is designed around core cloud solution architecture principles. These principles guide all technical decisions and ensure the system is reliable, secure, scalable, and cost-effective.

This project follows a **lean-first, scale-later** philosophy. The architecture is intentionally simple at the beginning, while remaining structurally sound and easy to evolve as the project grows.

---

### 2.1 High Availability

High availability is achieved through:

- Stateless backend services deployed on Kubernetes
- Kubernetes self-healing and pod rescheduling
- Managed AWS services such as **RDS** and **S3**, which are built for high availability

While the initial setup runs on a single-node Kubernetes cluster (for cost reasons), the architecture supports multi-node and multi-availability-zone setups in the future without redesign.

---

### 2.2 Fault Tolerance

Fault tolerance is achieved through:

- Kubernetes self-healing (automatic pod restarts and rescheduling)
- Managed AWS services handling infrastructure failures
- Stateless application design where possible

If an application instance crashes, Kubernetes automatically replaces it without manual intervention.

---

### 2.3 Security by Design

Security is built into the architecture from the start:

- **IAM roles** with least-privilege access
- **AWS Secrets Manager** for sensitive data
- **Security Groups** to restrict network access
- No hardcoded credentials in code or configuration files

The goal is to follow industry best practices while keeping the setup manageable for a single-developer project.

---

### 2.4 Cost Efficiency

Cost control is a first-class concern for this project. The infrastructure is intentionally designed to:

- Use **AWS Free Tier** and student credits where possible
- Run minimal compute resources (single node, low replica counts)
- Avoid unnecessary environments or duplicated infrastructure
- Use **selective logging** to prevent excessive CloudWatch costs

The system starts lean and can scale when needed.

---

### 2.5 Scalability

Although the initial setup is small, the architecture supports growth:

- Kubernetes enables horizontal scaling of application instances
- Storage (S3) and database (RDS) can scale as usage increases
- The system can evolve to multi-node clusters and multi-environment setups when required

Scalability is designed in, even if it is not immediately used.

---

### 2.6 Observability & Visibility

Basic observability is provided through:

- **CloudWatch logs** (warnings and errors only)
- Kubernetes health checks and pod status
- Application-level logging

The focus is on having enough visibility to debug and operate the system without generating unnecessary cost.

---

### 2.7 Simplicity & Maintainability

This project prioritizes:

- Simple, understandable architecture
- Managed services over self-hosted components where appropriate
- Clear separation of concerns between infrastructure, platform, and application layers

The goal is to make the system easy to reason about, easy to explain in interviews, and easy to maintain long-term.

## 3. High-Level Architecture Overview

Tasqly follows a cloud-native, container-based architecture designed to be simple, scalable, and cost-efficient. The system is composed of a mobile client, a containerized backend running on Kubernetes, and a set of managed AWS services.

At a high level, the architecture looks like this:

- **Mobile Application (Client)**
  - React Native mobile app
  - Communicates with the backend over HTTPS
  - Does not directly access any cloud resources

- **Backend API**
  - Spring Boot application
  - Exposes REST and/or GraphQL APIs
  - Packaged as a Docker container
  - Deployed on Kubernetes

- **Kubernetes Cluster**
  - Self-managed Kubernetes using **K3s** on a single EC2 instance (initial phase)
  - Runs backend application pods
  - Handles pod lifecycle, restarts, and rolling deployments
  - Designed to later migrate to **Amazon EKS** without major changes

- **Database**
  - **Amazon RDS (PostgreSQL)**
  - Stores application data (users, tasks, groups, comments, etc.)
  - Accessed only by the backend service
  - Managed backups and reliability provided by AWS

- **Object Storage**
  - **Amazon S3**
  - Stores user-uploaded media such as:
    - Profile avatars
    - Images attached to comments
    - Photos uploaded for landlord or maintenance requests
  - Backend stores metadata and object references, not binary files

- **Email & Notifications**
  - **AWS Lambda** functions for asynchronous tasks
  - **Amazon SES** for sending transactional emails
  - Used for notifications such as:
    - Task updates
    - Group events
    - Maintenance or service requests

- **Secrets & Configuration**
  - **AWS Secrets Manager** for sensitive configuration
  - Secrets injected into the application at runtime
  - No secrets stored in source control

- **CI/CD Pipeline**
  - **GitHub Actions**
  - Builds and tests the backend
  - Builds Docker images and pushes them to **Amazon ECR**
  - Deploys updated manifests to Kubernetes

- **Infrastructure as Code**
  - **Terraform** used to provision:
    - EC2 instances
    - Networking resources
    - RDS
    - S3 buckets
    - IAM roles and policies

This architecture intentionally separates concerns between application logic, infrastructure, and operational tooling. Each component can evolve independently while remaining cohesive as a system.

## 4. Cloud Provider & Account Setup

Tasqly is hosted on **Amazon Web Services (AWS)**. AWS was selected due to its wide industry adoption, rich managed service ecosystem, and strong alignment with cloud-native and DevOps best practices.

### 4.1 AWS Account Strategy

This project uses a **single AWS account**.

Reasons for this choice:
- The project is developed and maintained by a single developer
- Multiple accounts (dev/prod/security) would introduce unnecessary complexity
- Cost visibility and control are simpler in a single-account setup
- The architecture can evolve to multi-account if needed in the future

This approach is intentional and appropriate for a student-led, portfolio-focused project.

---

### 4.2 Region Selection

All AWS resources are deployed in a single AWS region.

The selected region is **ca-central-1 (Canada Central – Montreal)**.

This region was chosen because:
- It is geographically closest to the primary development location (Ottawa, Canada)
- It provides low-latency access for Canadian users
- It supports all required AWS services used in this project
- It keeps data residency within Canada

Availability Zones are managed automatically by AWS within the selected region, and services are designed to leverage multiple zones where applicable.  
This regional choice also avoids cross-region data transfer costs and keeps network traffic simple and cost-efficient for a side project.

---

### 4.3 Account Security Baseline

A minimal but effective security baseline is applied at the account level:

- Root account access is restricted and not used for daily operations
- Multi-Factor Authentication (MFA) enabled on the root account
- IAM users and roles are used instead of long-lived credentials
- Access is granted using least-privilege principles

This provides a secure foundation without introducing enterprise-level overhead.

---

### 4.4 Billing, Budgets, and Cost Awareness

Cost visibility and control are critical for this project.

The following practices are used:
- AWS billing alerts to detect unexpected spend
- Awareness of free-tier and student credit usage
- Regular review of active resources
- Intentional avoidance of always-on, high-cost services unless justified

These measures ensure the project remains financially sustainable while still enabling real-world experimentation and learning.

---

### 4.5 Resource Tagging Strategy

A simple and consistent tagging strategy is applied to all supported AWS resources to improve clarity, ownership tracking, and cost visibility.

The following tags are used:

- `Project = Tasqly-backend`
- `Environment = prod`
- `Owner = josue`
- `ManagedBy = terraform`

This tagging approach keeps resource ownership clear, simplifies cost tracking, and aligns with common industry practices without introducing unnecessary complexity.

## 5. Free Credits & Cost Strategy

Tasqly is developed as a student-led, portfolio-focused project. As such, managing cloud costs is a critical requirement. The infrastructure and service choices are intentionally designed to maximize learning value while minimizing financial risk.

---

### 5.1 Eligible Credit Programs

Tasqly applies to all AWS credit programs for which it is eligible in order to minimize out-of-pocket cloud costs during development.

The following programs are considered:

#### AWS Free Tier
- Automatically available for new AWS accounts
- Includes limited free usage for services such as EC2, RDS, and S3
- Used as the baseline cost-reduction mechanism

#### AWS Educate
- Educational program for students
- Provides learning resources and, depending on eligibility, promotional AWS credits
- Supports experimentation and early infrastructure setup

#### AWS Promotional Credits (Student / New Account Offers)
- Periodic promotional credits offered by AWS to new users
- Typically time-bound and subject to specific eligibility criteria

#### GitHub Student Developer Pack
- Provides access to development tools and cloud-related offers
- Complements CI/CD and development workflows
- May include indirect cloud credits or tooling benefits

#### AWS Activate (If Eligible)
- Startup-oriented program that may provide AWS credits
- Eligibility depends on project status and affiliation
- Considered as a potential future option

Credits from different programs may have different expiration dates and usage rules. The project does not assume that all credits are cumulative, but applies to all eligible programs to maximize available cost coverage.

---

### 5.2 Cost-Aware Service Selection

Service choices are driven by both technical relevance and cost efficiency:

- **Self-managed Kubernetes (K3s on EC2)** is used initially to avoid fixed control-plane costs
- **Managed services** (RDS, S3, Secrets Manager) are preferred over self-hosted alternatives
- **GitHub Actions** is used for CI/CD instead of paid cloud-native pipelines
- **Serverless components** (Lambda) are used only for low-frequency, event-driven workloads

This ensures the project remains affordable without sacrificing real-world relevance.

---

### 5.3 Minimal Resource Footprint

To control costs, the infrastructure follows a minimal baseline:

- Single Kubernetes node in the initial phase
- Low replica counts for backend services
- Single environment (production only)
- Short log retention periods
- No always-on, non-essential services

Resources can be scaled up only when justified by usage or learning goals.

---

### 5.4 Cost Monitoring and Guardrails

Basic guardrails are applied to prevent unexpected charges:

- AWS billing alerts enabled
- Regular review of active resources
- Explicit teardown of unused infrastructure during inactive periods
- Terraform used to ensure infrastructure is intentional and reproducible

These measures ensure cloud spending remains predictable and manageable.

---

### 5.5 Future Cost Evolution

As the project matures and additional credits or budget become available, the infrastructure can evolve to include:

- Migration to **Amazon EKS** for managed Kubernetes
- Multi-node clusters
- Additional environments (e.g., staging)

These changes are deferred intentionally to maintain cost efficiency in the early stages.

## 6. Compute (Kubernetes & EC2)

Tasqly uses container-based compute to ensure portability, scalability, and alignment with modern DevOps practices. Compute resources are intentionally kept minimal in the early stages and can scale as the project evolves.

---

### 6.1 Containerization Strategy

The backend application is packaged as a Docker container.

Key characteristics:
- A single container image for the modular monolithic backend
- Clear internal module boundaries within the application
- Images are built via CI/CD pipelines
- Images are stored in **Amazon ECR**
- Containers are immutable and versioned

This approach ensures consistent behavior across environments and simplifies deployment.

---

### 6.2 Initial Kubernetes Setup (Self-Managed)

In the initial phase, Kubernetes is self-managed using **K3s** on a single EC2 instance.

Reasons for this choice:
- Avoids fixed control-plane costs associated with managed Kubernetes
- Provides real Kubernetes experience (pods, deployments, services, rollouts)
- Keeps operational and financial overhead low
- Easy to migrate to managed Kubernetes later

The cluster runs:
- One Kubernetes node (single EC2 instance)
- One backend application deployment
- One application replica by default

This setup is sufficient for early development and demonstration purposes.

---

### 6.3 EC2 Instance Strategy

The Kubernetes node runs on a small, cost-effective EC2 instance.

Design considerations:
- Burstable instance type (e.g., `t3.small` or equivalent)
- Sized to handle light traffic and development workloads
- Can be replaced or resized with minimal effort

The instance is provisioned and managed using **Terraform** to ensure reproducibility.

---

### 6.4 Scaling Strategy

Although the initial setup uses minimal compute, scaling is supported:

- Kubernetes supports horizontal scaling of application pods
- Replica count can be increased from 1 to multiple instances when needed
- Node-level scaling can be introduced later if traffic grows

Scaling is configured but not aggressively used to control costs.

---

### 6.5 Future Migration to Managed Kubernetes (EKS)

When sufficient AWS credits or budget become available, the project can migrate to **Amazon EKS**.

Expected benefits:
- Managed Kubernetes control plane
- Simplified upgrades and maintenance
- Deeper AWS service integrations

The current architecture ensures this migration can happen without major changes to application code or deployment manifests.

## 7. Container Registry (Amazon ECR)

Tasqly uses **Amazon Elastic Container Registry (ECR)** to store and manage Docker images for the backend application.

ECR is tightly integrated with AWS services, supports fine-grained access control via IAM, and fits well within a Kubernetes-based deployment workflow.

---

### 7.1 Image Strategy

The backend is deployed as a **single container image** representing a **modular monolithic application**.

Characteristics:
- One Docker image for the entire backend
- Internal modules are managed within the application codebase
- Image versioning is tied to Git commits and CI/CD runs
- Images are immutable once pushed to the registry

This approach keeps deployments simple while still allowing internal modularity.

---

### 7.2 CI/CD Integration

Docker images are built and pushed to Amazon ECR using **GitHub Actions**.

The CI/CD pipeline performs the following steps:
1. Build the Docker image
2. Tag the image using a meaningful identifier (e.g. commit SHA)
3. Authenticate to Amazon ECR using IAM credentials
4. Push the image to the ECR repository

Kubernetes deployments reference the image stored in ECR when rolling out new versions.

---

### 7.3 Access Control

Access to the ECR repository is restricted using IAM:

- CI/CD pipelines have permission to push images
- Kubernetes nodes have permission to pull images
- No public access to the repository

This ensures that only authorized components can interact with container images.

---

### 7.4 Cost Considerations

ECR costs are expected to be minimal for this project:

- A small number of images stored at any given time
- Old images can be cleaned up periodically
- Storage usage remains low due to the single-image strategy

ECR is therefore well-suited for a cost-conscious, student-led project.

## 8. Database (Amazon RDS – PostgreSQL)

Tasqly uses **PostgreSQL** as its primary relational database. PostgreSQL was selected due to its robustness, strong ecosystem, and suitability for transactional application workloads.

The database is hosted on **Amazon RDS**, allowing the project to leverage a managed service while avoiding the operational complexity of running a database inside Kubernetes.

---

### 8.1 Database Role in the System

The database is responsible for storing all core application data, including:

- Users and authentication-related data
- Groups and shared living entities
- Tasks, assignments, and completion states
- Comments and activity history
- References to user-uploaded media stored in S3

Only the backend application has direct access to the database.

---

### 8.2 Managed Database Strategy

Amazon RDS is used instead of a self-hosted PostgreSQL instance to:

- Reduce operational overhead
- Benefit from automated backups
- Improve reliability and stability
- Avoid running stateful workloads inside Kubernetes

This aligns with best practices for cloud-native architectures.

---

### 8.3 Cost-Aware Configuration

The RDS instance is configured with cost efficiency in mind:

- Small instance class suitable for low traffic
- Minimal allocated storage
- No unnecessary read replicas or multi-cluster setups
- Automated backups enabled with conservative retention

The database can be resized or upgraded later if needed.

---

### 8.4 Connectivity and Security

Database access is restricted through:

- Private networking within the AWS VPC
- Security groups allowing access only from the backend
- Credentials stored securely in **AWS Secrets Manager**

No database credentials are stored in source control or container images.

---

### 8.5 Data Lifecycle and Reset Strategy

During early development and testing phases:

- The database may be reset or recreated as needed
- Schema migrations are managed at the application level
- Data persistence becomes more critical once the application is publicly available

This approach supports rapid iteration while keeping the production setup clean when the project goes live.

## 9. Object Storage (Amazon S3)

Tasqly uses **Amazon S3** for object storage. S3 is used to store user-uploaded media and other binary assets that do not belong in the relational database.

This approach keeps the database lightweight and allows the system to scale media storage independently of application logic.

---

### 9.1 Use Cases

Amazon S3 is used to store:

- User profile avatars
- Images attached to comments or activity threads
- Photos uploaded for maintenance or landlord-related requests
- Any future binary assets associated with the application

The backend stores only metadata and object references, not the files themselves.

---

### 9.2 Access Pattern

Media uploads and access follow a controlled flow:

- The mobile client uploads media through the backend
- The backend validates and processes requests
- Files are stored in S3 under structured object keys
- The backend returns references or pre-signed URLs when appropriate

Direct public access to the S3 bucket is avoided.

---

### 9.3 Security and Permissions

S3 access is secured using:

- Private buckets with no public access
- IAM policies granting access only to the backend
- Optional use of pre-signed URLs for controlled, time-limited access

This ensures media files are protected while remaining accessible to authorized users.

---

### 9.4 Cost Management

S3 costs are expected to remain low:

- Small file sizes (primarily images)
- Low initial user volume
- Standard storage class used initially

Lifecycle policies can be introduced later to transition older objects to cheaper storage classes if needed.

---

### 9.5 Benefits of Using Object Storage

Using S3 provides:

- High durability and availability
- Simple scalability without infrastructure management
- Clear separation between application data and binary assets
- Cost-efficient storage for a media-heavy use case

## 10. CI/CD Pipeline (GitHub Actions)

Tasqly uses **GitHub Actions** for Continuous Integration and Continuous Deployment (CI/CD). GitHub Actions was chosen due to its tight integration with the source repository, ease of use, and cost-effectiveness for a student-led project.

The pipeline is designed to catch issues early, protect the main branch from breaking changes, and automate deployments to Kubernetes.

---

### 10.1 CI/CD Workflow Overview

The CI/CD workflow is split into two distinct phases:

- **Continuous Integration (CI)** – validation and quality checks
- **Continuous Deployment (CD)** – build and deployment to the cloud

This separation ensures code quality while keeping deployments predictable.

---

### 10.2 Continuous Integration (CI)

The CI pipeline runs on:

- Every push to any branch
- Every pull request targeting the `main` branch

CI performs the following checks:

1. Check out the source code
2. Run automated tests
3. Validate application build
4. Build the Docker image (without pushing)

If any step fails, the pipeline stops and the change is rejected.

---

### 10.3 Branch Protection and Merge Safety

To prevent broken code from reaching production, the repository enforces branch protection rules on the `main` branch:

- CI checks must pass before merging
- Pull requests are required (no direct pushes to `main`)
- Only validated code can be merged

This ensures that merges into `main` are safe, reproducible, and production-ready.

---

### 10.4 Continuous Deployment (CD)

The CD pipeline runs only when changes are merged into the `main` branch.

Deployment steps include:

1. Build the backend application
2. Build the Docker image
3. Tag the image using a unique identifier (e.g. commit SHA)
4. Push the image to **Amazon ECR**
5. Deploy updated manifests to Kubernetes using `kubectl apply`

Kubernetes performs a rolling update to deploy the new version without downtime.

---

### 10.5 Security Considerations

CI/CD security is enforced through:

- IAM credentials with least-privilege access
- Secrets injected securely via GitHub Actions secrets
- No credentials committed to source control
- Restricted permissions for image publishing and cluster access

This minimizes the blast radius of CI/CD credentials.

---

### 10.6 Cost Awareness

GitHub Actions is used instead of cloud-native CI/CD services to:

- Avoid additional AWS service costs
- Keep the pipeline simple and maintainable
- Align with commonly used industry tooling

This approach balances DevOps best practices with budget constraints.

## 11. Infrastructure as Code (Terraform)

Tasqly uses **Terraform** to provision and manage all cloud infrastructure. Infrastructure as Code (IaC) ensures that the environment is reproducible, version-controlled, and easy to evolve over time.

Terraform was chosen to align with industry standards and to support long-term learning goals, including Terraform certification.

---

### 11.1 Scope of Terraform

Terraform is responsible for provisioning and managing:

- EC2 instances (Kubernetes node)
- Networking resources (VPC, subnets, security groups)
- Amazon RDS (PostgreSQL)
- Amazon S3 buckets
- Amazon ECR repositories
- IAM roles and policies
- Supporting infrastructure required by the platform

Application-level Kubernetes resources (Deployments, Services, etc.) are managed separately from Terraform.

---

### 11.2 State Management

Terraform state is managed carefully to ensure safety and consistency:

- State is stored remotely (e.g. S3 backend) to prevent loss
- State locking is enabled to avoid concurrent modifications
- Sensitive values are never stored in plaintext configuration files

This setup prevents accidental drift and supports safe iteration.

---

### 11.3 Environment Management

The project uses a **single environment** in the early stages.

Environment considerations:
- No separate staging or test environment initially
- Infrastructure can be recreated or modified safely using Terraform
- Additional environments can be introduced later if needed

This approach balances simplicity with future extensibility.

---

### 11.4 Change Management

All infrastructure changes follow a controlled workflow:

1. Modify Terraform configuration
2. Review the planned changes (`terraform plan`)
3. Apply changes intentionally (`terraform apply`)
4. Commit changes to version control

This ensures infrastructure changes are deliberate and traceable.

---

### 11.5 Security and Best Practices

Terraform configurations follow best practices:

- Least-privilege IAM policies
- Clear module boundaries (when applicable)
- Use of variables for environment-specific values
- No secrets committed to version control

Terraform acts as the single source of truth for infrastructure.

## 12. Secrets Management (AWS Secrets Manager)

Tasqly uses **AWS Secrets Manager** to securely store and manage sensitive configuration values. This prevents secrets from being hardcoded in source code, container images, or configuration files.

Secrets Manager is used instead of self-hosted solutions to reduce operational overhead and align with AWS-native security best practices.

---

### 12.1 Types of Secrets Managed

The following sensitive values are managed using AWS Secrets Manager:

- Database credentials (username, password)
- Application secrets and tokens
- Third-party API keys (if any)
- Any future sensitive configuration values

No secrets are committed to version control at any time.

---

### 12.2 Secret Access Pattern

Secrets are accessed at runtime by the backend application.

Access pattern:
- Secrets are stored centrally in AWS Secrets Manager
- IAM roles grant the backend permission to read only required secrets
- Secrets are retrieved at application startup or on demand
- Secrets are injected as environment variables or application configuration values

This ensures secrets remain protected while being accessible to authorized components.

---

### 12.3 Integration with Kubernetes

Secrets are integrated with Kubernetes in a controlled manner:

- The Kubernetes node (EC2) assumes an IAM role with permission to read secrets
- The backend application retrieves secrets using the AWS SDK
- Secrets are never stored in Kubernetes manifests or ConfigMaps

This avoids duplicating secrets across systems and reduces exposure.

---

### 12.4 CI/CD Considerations

CI/CD pipelines do not store or hardcode secrets.

Instead:
- GitHub Actions uses encrypted secrets for authentication
- AWS credentials used by CI/CD are scoped and short-lived where possible
- Secrets Manager remains the source of truth for runtime secrets

This separation reduces risk and limits blast radius.

---

### 12.5 Security Best Practices

Secrets management follows these principles:

- Least-privilege access via IAM
- Centralized secret storage
- Regular review of stored secrets
- No plaintext secrets in logs or error messages

This approach provides strong security while remaining simple to operate.

## 13. Email & Notifications (AWS Lambda + Amazon SES)

Tasqly uses an event-driven approach for sending email notifications. This functionality is implemented using **AWS Lambda** in combination with **Amazon Simple Email Service (SES)**.

This design avoids running always-on services for infrequent tasks and keeps operational costs low.

---

### 13.1 Use Cases

Email notifications are used for:

- Task assignments or updates
- Group-related events
- Maintenance or landlord service requests
- Other low-frequency, user-facing notifications

Email delivery is asynchronous and does not block core application flows.

---

### 13.2 Event-Driven Design

The notification system follows an event-driven pattern:

- The backend emits an event when a notification is required
- A Lambda function is triggered to handle the notification
- The Lambda function formats and sends the email using Amazon SES

This ensures notification logic is isolated from the core application.

---

### 13.3 Email Templating

Email content is generated within the Lambda function using HTML-based templates.

Characteristics:
- Templates are defined using HTML and inline CSS
- Dynamic values (user name, task details, links) are injected at runtime
- Templates are version-controlled with the Lambda code

This allows consistent branding and flexible message formatting.

---

### 13.4 Security and Access Control

Security is enforced through:

- IAM roles granting Lambda permission to send emails via SES
- Least-privilege permissions for all components
- No hardcoded credentials in Lambda code

SES configuration is restricted to approved sender identities.

---

### 13.5 Cost Considerations

This approach is cost-efficient because:

- Lambda is billed only per invocation
- Email volume is expected to be low
- No persistent infrastructure is required

As a result, email notifications introduce minimal additional cost to the system.

## 14. Networking & Security

Tasqly uses a simple and secure networking model that prioritizes clarity, least privilege, and cost efficiency. The design avoids unnecessary complexity while following AWS and cloud-native best practices.

---

### 14.1 Virtual Private Cloud (VPC)

All infrastructure is deployed inside a dedicated **AWS VPC**.

The VPC provides:
- Network isolation from other AWS accounts and projects
- Control over inbound and outbound traffic
- A foundation for future expansion if needed

The initial setup uses a minimal VPC configuration appropriate for a single-developer project.

---

### 14.2 Subnet Strategy

The network uses a small number of subnets:

- Public subnet for the Kubernetes node (EC2)
- Managed services (RDS) are placed in private subnets where applicable

This setup keeps routing simple while maintaining reasonable security boundaries.

---

### 14.3 Security Groups

Security Groups are used as the primary network firewall mechanism.

Rules are defined to:
- Allow inbound HTTPS traffic to the backend
- Allow backend access to the database
- Restrict database access to backend resources only
- Allow necessary outbound traffic for updates and external APIs

No wide-open or overly permissive rules are used.

---

### 14.4 IAM and Least Privilege

Identity and access management is a core security pillar.

Key principles:
- Each component has a dedicated IAM role
- Permissions are scoped to the minimum required actions
- No shared credentials between services
- No long-lived credentials stored on disk

IAM roles are used for:
- Kubernetes node access
- CI/CD pipelines
- Lambda functions
- Terraform provisioning

---

### 14.5 Network Exposure and Access Control

The system exposes only what is required:

- The backend API is exposed over HTTPS
- Internal services are not publicly accessible
- The database is never exposed to the public internet

This minimizes the attack surface and reduces risk.

---

### 14.6 Security Philosophy

Security decisions follow a pragmatic approach:

- Prefer managed AWS security mechanisms
- Avoid unnecessary tools or services
- Favor clarity and auditability over complexity

The goal is to achieve strong security guarantees without over-engineering the system.
