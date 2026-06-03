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
