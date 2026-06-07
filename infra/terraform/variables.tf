variable "aws_region" {
  type        = string
  description = "AWS region"
  default     = "ca-central-1"
}

variable "vpc_cidr" {
  description = "CIDR block for the Tasqly VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "public_subnet_cidr" {
  description = "CIDR block for the public subnet"
  type        = string
  default     = "10.0.1.0/24"
}

variable "private_subnet_cidrs" {
  description = "CIDR blocks for private subnets"
  type        = list(string)
  default     = ["10.0.2.0/24", "10.0.3.0/24"]
}

variable "app_ami_id" {
  description = "Custom AMI ID for the Tasqly application EC2 instance"
  type        = string
}

variable "app_instance_type" {
  description = "EC2 instance type for the Tasqly application host"
  type        = string
  default     = "t3.micro"
}

variable "db_name" {
  description = "Name of the Tasqly PostgreSQL database"
  type        = string
  default     = "tasqly"
}

variable "db_username" {
  description = "Master username for the Tasqly database"
  type        = string
  default     = "tasqly_admin"
}

variable "db_password" {
  description = "Master password for the Tasqly database"
  type        = string
  sensitive   = true
}

variable "db_instance_class" {
  description = "RDS instance class"
  type        = string
  default     = "db.t3.micro"
}

variable "uploads_bucket_name" {
  description = "S3 bucket name for Tasqly application uploads"
  type        = string
  default     = "tasqly-prod-uploads"
}

variable "backend_ecr_repository_name" {
  description = "ECR repository name for Tasqly backend images"
  type        = string
  default     = "tasqly-prod-backend"
}

variable "cloudwatch_log_retention_days" {
  description = "Number of days to retain CloudWatch logs"
  type        = number
  default     = 14
}
