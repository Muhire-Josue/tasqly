# 🏗️ Terraform Documentation
![alt text](logo.png)
## 1) Overview

Tasqly uses **Terraform** to define and manage AWS infrastructure as code.

The goal is to keep the infrastructure:

- repeatable
- version controlled
- easier to maintain
- consistent across manual and CI/CD-driven deployments

Terraform will be used to provision the main AWS resources for the project.

---

## 2) Purpose

Terraform is used to:

- define cloud infrastructure in code
- avoid manual AWS console setup
- keep infrastructure changes reviewable
- support repeatable environment creation
- allow CI/CD to manage infrastructure consistently

This makes the AWS environment easier to understand and maintain over time.

---

## 3) State Management

Terraform state will be stored remotely in an **Amazon S3 bucket**.

This is done to:

- keep state persistent
- avoid relying on local state files
- allow CI/CD to use the same infrastructure state
- reduce the risk of configuration drift

The state setup should remain simple and cost-aware.

---

## 4) Scope

Terraform will manage the main Tasqly AWS infrastructure, including:

- VPC
- subnets
- route tables
- Internet Gateway
- security groups
- EC2 instance
- custom AMI reference
- Amazon RDS for PostgreSQL
- Amazon S3 buckets
- IAM resources
- AWS Budgets

This keeps the infrastructure definition centralized and reproducible.

---

## 5) File Structure

To keep the Terraform code clean and maintainable, the project will be organized by responsibility.

```text
terraform/
├── main.tf
├── providers.tf
├── versions.tf
├── variables.tf
├── terraform.tfvars
├── outputs.tf
├── backend.tf
├── networking.tf
├── security.tf
├── compute.tf
├── database.tf
├── storage.tf
├── iam.tf
├── budgets.tf
└── README.md
```

## 6) File Responsibilities
- main.tf → shared top-level infrastructure wiring
- providers.tf → AWS provider configuration
- versions.tf → Terraform and provider version constraints
- variables.tf → input variables
- terraform.tfvars → environment values
- outputs.tf → useful output values
- backend.tf → remote state configuration
- networking.tf → VPC, subnets, route tables, Internet Gateway
- security.tf → security groups and related rules
- compute.tf → EC2 and custom AMI configuration
- database.tf → RDS PostgreSQL resources
- storage.tf → S3 buckets
- iam.tf → IAM user, policies, and access configuration
- budgets.tf → AWS Budgets resources
- README.md → usage notes and structure overview

## 7) Workflow

A typical Terraform workflow for Tasqly will follow this sequence:
- terraform init: *Initialize the project and download required providers.*
- terraform fmt: *Format Terraform files.*
	3.	terraform validate: *Validate configuration syntax and structure.*
	4.	terraform plan: *Review the proposed infrastructure changes.*
	5.	terraform apply: *Apply approved changes to AWS.*

This helps keep infrastructure changes controlled and reviewable.

## 8) CI/CD Usage

Terraform will also be used by the GitHub Actions CI/CD pipeline for infrastructure-related changes.

Using a shared remote state in S3 allows the pipeline to work with the same infrastructure state instead of depending on a local machine.

This supports:
- consistent deployments
- cleaner automation
- reduced state mismatch risk

## 9) Future Improvement

Automated Terraform validation and testing will be added later in CI/CD.

Planned future checks include:
- formatting checks
- validation
- plan checks
- security or policy checks

For now, this remains a future enhancement.

## 10) Summary

Terraform is the Infrastructure as Code layer for Tasqly.

It defines the AWS environment in code, stores state remotely in S3, supports CI/CD-based infrastructure changes, and keeps the project organized through a clean file structure.

