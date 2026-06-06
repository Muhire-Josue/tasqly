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

