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
