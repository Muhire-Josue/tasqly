# 🧱 Tasqly Infrastructure – High-Level Architecture

![alt text](logo.png)

## 📌 **Architecture Diagram (TODO)**
>
> **Status:** Not created yet
> **Next step:** Create a high-level system diagram showing:
> - Mobile client  
> - Backend (Spring Boot)  
> - GKE  
> - Cloud SQL (Postgres)  
> - Cloud Storage  
> - Secret Manager  
> - Cloud Functions (email)  
> - GitHub Actions (CI/CD)
>
> _Once available, replace this block with:_
>
> `![Tasqly Architecture Diagram](architecture/diagram.png)`

---

## 1) Overview & Goals

Tasqly is a mobile application for shared households (tasks, landlord requests, media uploads).

This infrastructure is designed to:

- Follow real-world cloud architecture practices
- Showcase DevOps skills (**Kubernetes, Terraform, CI/CD**)
- Remain **student-budget friendly** using **GCP credits**
- Start simple and scale later

Tech stack highlights:

- Docker + Kubernetes (GKE)
- Terraform (Infrastructure as Code)
- GitHub Actions (CI/CD)
- Managed database + object storage + secrets

---

## 2) Core Principles

- **Lean-first:** minimal resources, grow only when needed  
- **Secure by default:** least privilege, no hardcoded secrets  
- **Managed services:** avoid stateful workloads in Kubernetes  
- **Observable but cheap:** log warnings/errors, short retention  
- **Portable:** containers + Kubernetes manifests  

---

## 3) High-Level Architecture

- **Client:** React Native mobile app (HTTPS)
- **Backend:** Spring Boot modular monolith (single container image)
- **Kubernetes:** **GKE** (Autopilot preferred for cost predictability)
- **Container Registry:** **Artifact Registry**
- **Database:** **Cloud SQL (PostgreSQL)**
- **Object Storage:** **Cloud Storage**
- **Secrets:** **Secret Manager**
- **Email:** Event-driven via **Cloud Functions**
- **Observability:** **Cloud Logging + Monitoring**
- **CI/CD:** GitHub Actions → GKE
- **IaC:** Terraform

---

## 4) GCP Project Setup

- **Single GCP project**
- **Region:** `northamerica-northeast1` (Montreal)
- **Labels:**
  - `project=tasqly-backend`
  - `env=prod`
  - `owner=josue`
  - `managedby=terraform`

---

## 5) Credits & Cost Strategy

Goal: maximize free credits before spending real money.

- GitHub Student Pack → GCP credits  
- GCP Free Trial ($300)  
- Budget alerts enabled  
- Minimal workloads:
  - 1 backend deployment
  - Low replica count
  - Short log retention  

---

## 6) Deployment Workflow

**CI (every push + PR):**
1. Run tests  
2. Build app  
3. Build Docker image (no push)  

**CD (merge to `main`):**
1. Build + tag image  
2. Push to Artifact Registry  
3. Deploy to GKE  
4. Rolling update  

**Branch protection:**
- PR required  
- CI must pass  

---

## 7) Data & Media Handling

- **Cloud SQL (Postgres)** → application data  
- **Cloud Storage** → media files  
- DB stores object references, not files  
- Access via IAM + signed URLs  

---

## 8) Security

- **Secret Manager** for DB credentials + app secrets  
- IAM least privilege  
- No public DB access  
- HTTPS-only backend exposure  

---

## 9) Observability

- Cloud Logging: warnings/errors only  
- Short retention  
- Health endpoints + k8s probes  
- Minimal alerting  