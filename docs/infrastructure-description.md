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