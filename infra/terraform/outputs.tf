output "vpc_id" {
  description = "ID of the Tasqly VPC"
  value       = aws_vpc.main.id
}

output "vpc_cidr" {
  description = "CIDR block of the Tasqly VPC"
  value       = aws_vpc.main.cidr_block
}

output "public_subnet_id" {
  description = "ID of the public subnet"
  value       = aws_subnet.public.id
}

output "private_subnet_ids" {
  description = "IDs of the private subnets"
  value       = aws_subnet.private[*].id
}

output "private_route_table_id" {
  description = "ID of the private route table"
  value       = aws_route_table.private.id
}

output "app_security_group_id" {
  description = "ID of the application security group"
  value       = aws_security_group.app.id
}

output "db_security_group_id" {
  description = "ID of the database security group"
  value       = aws_security_group.db.id
}

output "ec2_app_role_name" {
  description = "Name of the EC2 application IAM role"
  value       = aws_iam_role.ec2_app.name
}

output "ec2_app_instance_profile_name" {
  description = "Name of the EC2 application instance profile"
  value       = aws_iam_instance_profile.ec2_app.name
}
output "app_instance_id" {
  description = "ID of the Tasqly application EC2 instance"
  value       = aws_instance.app.id
}

output "app_public_ip" {
  description = "Public IP of the Tasqly application EC2 instance"
  value       = aws_instance.app.public_ip
}

output "db_instance_endpoint" {
  description = "RDS PostgreSQL endpoint"
  value       = aws_db_instance.postgres.endpoint
}

output "db_instance_name" {
  description = "RDS PostgreSQL database name"
  value       = aws_db_instance.postgres.db_name
}

output "uploads_bucket_name" {
  description = "Name of the Tasqly uploads S3 bucket"
  value       = aws_s3_bucket.uploads.bucket
}

output "uploads_bucket_arn" {
  description = "ARN of the Tasqly uploads S3 bucket"
  value       = aws_s3_bucket.uploads.arn
}
