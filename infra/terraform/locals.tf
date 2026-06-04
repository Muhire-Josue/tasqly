locals {
  common_tags = {
    Project     = "tasqly"
    Environment = "prod"
    Owner       = "josue"
    ManagedBy   = "terraform"
  }
  name_prefix = "tasqly-prod"
}
output "internet_gateway_id" {
  description = "ID of the Tasqly Internet Gateway"
  value       = aws_internet_gateway.main.id
}

output "public_route_table_id" {
  description = "ID of the public route table"
  value       = aws_route_table.public.id
}
