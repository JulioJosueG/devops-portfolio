variable "subscription_id" {
  description = "Azure Subscription ID"
  type        = string
}

variable "resource_group_name" {
  description = "Name of the Resource Group"
  type        = string
  default     = "rg-devops-portfolio"
}

variable "location" {
  description = "Azure Region"
  type        = string
  default     = "East US"
}

variable "app_name" {
  description = "Base name for the Web App and Service Plan"
  type        = string
  default     = "julio-portfolio"
}
