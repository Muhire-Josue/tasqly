# ⚙️ CI/CD Architecture

![alt text](logo.png)

## 1) Overview

Tasqly uses **GitHub Actions** for CI/CD.

The pipeline is split into three main stages:

- **Continuous Integration (CI)**
- **Post Build**
- **Continuous Delivery (CD)**

This structure separates validation, reporting, and deployment so the pipeline stays easier to understand and maintain.

At a high level:

- **CI** builds, tests, scans, and packages the application
- **Post Build** stores reports and build evidence
- **CD** deploys approved artifacts and verifies runtime behavior

---

## 2) Continuous Integration Architecture

The CI stage is responsible for validating the application before deployment.

### CI flow

1. **Build / Install Dependencies**  
   Install project dependencies required for the build.

2. **OWASP Dependency Check**  
   Scan dependencies for known vulnerabilities.

3. **NPM Dependency Audits**  
   Run package-level dependency security checks.

4. **Code Coverage**  
   Generate code coverage metrics.

5. **Unit Testing Node 1 / Node 2**  
   Run unit tests.

6. **SAST**  
   Perform static application security testing.

7. **Quality Gates**  
   Verify that the code meets required quality and security thresholds.

8. **Dockerizing Build**  
   Build the application container image.

9. **Vulnerability Scan**  
   Scan the built image for vulnerabilities.

10. **Push Image**  
   Push the validated image to Amazon ECR.

### CI output

The CI stage produces:

- a validated container image
- unit test results
- code coverage results
- dependency scan results
- vulnerability scan results

---

## 3) Post Build Architecture

The post-build stage is responsible for collecting and storing pipeline outputs.

### Post-build outputs

- Unit Test Reports
- Code Coverage Reports
- Vulnerability Reports
- Dependency Scan Reports

### Publishing target

- **Amazon S3 bucket**

This stage keeps pipeline evidence available for inspection and traceability.

---

## 4) Continuous Delivery Architecture

The CD stage is responsible for deploying approved artifacts.

### CD flow

1. **Update Docker Image Tags**  
   Update deployment references to the new image version.

2. **Kubernetes Deploy**  
   Deploy the application through the Kubernetes delivery flow.

3. **DAST – OWASP ZAP**  
   Run dynamic application security testing against the deployed application.

4. **Approval Stage**  
   Require approval before continuing deployment actions.

5. **AWS Lambda Deploy**  
   Deploy Lambda function code.

6. **Update Lambda Configurations**  
   Apply required Lambda configuration updates.

7. **AWS Lambda Invocation / Testing**  
   Invoke and test deployed Lambda functions.

### Lambda deployment approach

Lambda code is deployed through **GitHub Actions**.

The Lambda flow is:

- package the Lambda code
- deploy the function code
- update configuration if needed
- invoke and test the function after deployment

For the initial phase, Lambda uses a lightweight deployment model suited for small event-driven tasks such as email-related processing.

---

## 5) Artifact Strategy

Tasqly keeps artifact retention intentionally small and cost-aware.

### Container images in Amazon ECR

Amazon ECR keeps only:

- the **current** image
- the **previous** image

Image tags use a timestamp format, for example:

`YYYY-MM-DD-hh-mm-ss`

If the new deployment remains healthy, the previous image is deleted after **6 hours**.

This keeps rollback available during the critical deployment window without allowing unnecessary image accumulation.

### Post-build reports in Amazon S3

The S3 bucket keeps only:

- the **current** report set
- the **previous** report set

If the new pipeline outputs remain valid, the older retained report set is deleted after **6 hours**.

This keeps recent pipeline evidence available while controlling storage growth and cost.

---

## 6) Rollback Approach

Rollback is intentionally simple.

If the new deployment fails:

- Kubernetes rolls back to the previous working version
- the previous image remains available during the first 6 hours after deployment
- older versions are not kept in ECR because they can be rebuilt from source control if needed

---

## 7) Architecture Summary

The Tasqly CI/CD architecture works as follows:

- **GitHub Actions** runs the pipeline
- **CI** validates code, tests the application, runs security checks, builds the image, and pushes it to ECR
- **Post Build** stores reports in an S3 bucket
- **CD** deploys the new version, runs runtime checks, and handles Lambda delivery
- **ECR** keeps only the current and previous images
- **S3** keeps only the current and previous report sets
- older retained artifacts are removed after 6 hours if deployment remains healthy