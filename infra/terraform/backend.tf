terraform {
  backend "s3" {
    bucket = "tasqly-terraform-state-prod"
    key    = "tasqly/prod/terraform.tfstate"
    region = "ca-central-1"
  }
}
