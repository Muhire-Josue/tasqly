## Secrets Loading Strategy

The Tasqly backend must not store production secrets directly in Kubernetes manifests or in Git.

Production secrets are stored in AWS Secrets Manager using the following secret:

```text
tasqly-prod/application/secrets
```