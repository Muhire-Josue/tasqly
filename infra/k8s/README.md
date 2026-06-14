# Tasqly Kubernetes Deployment

This folder contains Kubernetes manifests for deploying the Tasqly backend application to production.

## Structure

```text
infra/k8s/
├── README.md
└── prod/
    ├── namespace.yaml
    ├── configmap.yaml
    ├── deployment.yaml
    ├── service.yaml
    └── ingress.yaml
```

## Production Namespace

All production backend resources run in the following namespace:

```text
tasqly-prod
```

## Apply Production Manifests

From the `infra/k8s/prod` folder, apply the manifests in this order:

```bash
sudo kubectl apply -f namespace.yaml
sudo kubectl apply -f configmap.yaml
sudo kubectl apply -f service.yaml
sudo kubectl apply -f deployment.yaml
sudo kubectl apply -f ingress.yaml
```

Or apply everything in the folder:

```bash
sudo kubectl apply -f .
```

## Verify Resources

Check the namespace:

```bash
sudo kubectl get namespaces
```

Check all Tasqly resources:

```bash
sudo kubectl get all -n tasqly-prod
```

Check pods:

```bash
sudo kubectl get pods -n tasqly-prod
```

Check deployments:

```bash
sudo kubectl get deployments -n tasqly-prod
```

Check services:

```bash
sudo kubectl get services -n tasqly-prod
```

Check ingress:

```bash
sudo kubectl get ingress -n tasqly-prod
```

## View Backend Logs

View current backend logs:

```bash
sudo kubectl logs -n tasqly-prod deployment/tasqly-backend
```

Follow logs live:

```bash
sudo kubectl logs -n tasqly-prod deployment/tasqly-backend -f
```

View logs from a specific pod:

```bash
sudo kubectl get pods -n tasqly-prod
sudo kubectl logs -n tasqly-prod <pod-name>
```

## Restart the Backend

Restart the backend Deployment:

```bash
sudo kubectl rollout restart deployment/tasqly-backend -n tasqly-prod
```

Check rollout status:

```bash
sudo kubectl rollout status deployment/tasqly-backend -n tasqly-prod
```

## Update Backend Image

Update the backend image manually:

```bash
sudo kubectl set image deployment/tasqly-backend \
  tasqly-backend=222907083284.dkr.ecr.ca-central-1.amazonaws.com/tasqly-prod-backend:<image-tag> \
  -n tasqly-prod
```

Example:

```bash
sudo kubectl set image deployment/tasqly-backend \
  tasqly-backend=222907083284.dkr.ecr.ca-central-1.amazonaws.com/tasqly-prod-backend:hello \
  -n tasqly-prod
```

Then verify rollout:

```bash
sudo kubectl rollout status deployment/tasqly-backend -n tasqly-prod
sudo kubectl get pods -n tasqly-prod
```

## Test Backend Endpoint

Internal cluster test:

```bash
sudo kubectl run curl-test \
  --rm -it \
  --image=curlimages/curl \
  --namespace tasqly-prod \
  --restart=Never \
  -- curl http://tasqly-backend:8080/api/hello
```

External test through EC2 public IP:

```bash
curl http://16.54.243.37/api/hello
```

Health endpoint:

```bash
curl http://16.54.243.37/actuator/health
```

## Delete Production Resources

Delete all production manifests:

```bash
sudo kubectl delete -f .
```

Or delete each resource individually:

```bash
sudo kubectl delete -f ingress.yaml
sudo kubectl delete -f deployment.yaml
sudo kubectl delete -f service.yaml
sudo kubectl delete -f configmap.yaml
sudo kubectl delete -f namespace.yaml
```

## Secrets

Plaintext secrets must not be committed to Git.

The backend currently uses a manually created Kubernetes Secret for database credentials:

```text
tasqly-backend-db-secret
```

The long-term target is to load production secrets from AWS Secrets Manager:

```text
tasqly-prod/application/secrets
```

## Logging

The backend writes logs to stdout/stderr.

Logs are available through:

```bash
sudo kubectl logs -n tasqly-prod deployment/tasqly-backend
```

Do not rely on file-based logs inside containers.

## Command Reference

```bash
sudo kubectl apply -f .
```

Applies all Kubernetes manifests in the current folder.

```bash
sudo kubectl get all -n tasqly-prod
```

Shows pods, services, deployments, and replicasets in the `tasqly-prod` namespace.

```bash
sudo kubectl rollout restart deployment/tasqly-backend -n tasqly-prod
```

Forces Kubernetes to restart the backend pods managed by the Deployment.

```bash
sudo kubectl set image ...
```

Updates the image used by the Deployment without manually editing the running resource.

```bash
sudo kubectl delete -f .
```

Deletes all Kubernetes resources defined in the current folder.