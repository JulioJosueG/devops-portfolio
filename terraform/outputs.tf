output "website_url" {
  value = "https://${azurerm_linux_web_app.app.default_hostname}"
}

output "app_service_name" {
  value = azurerm_linux_web_app.app.name
}

output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}
