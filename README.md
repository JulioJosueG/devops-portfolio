# DevOps Portfolio - Julio Hernandez

A professional portfolio showcasing generic and advanced DevOps projects, built with **React, TypeScript, and Vite**, and deployed using **Infrastructure as Code (Terraform)** and **GitHub Actions** on **Azure**.

![Project Status](https://img.shields.io/badge/status-live-success)
![Build](https://img.shields.io/github/actions/workflow/status/JulioJosueG/devops-portfolio/deploy.yml)
![Azure](https://img.shields.io/badge/azure-cloud-blue)

## 🚀 Concept: Infrastructure as Story

This portfolio moves beyond traditional code showcases to focus on:
- **Architecture Visualization**: Interactive diagrams and flows.
- **Process & Logic**: How problems are solved using automation.
- **Measurable Impact**: Quantifiable results (Uptime, Deployment speed).

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3, `lucide-react` (Icons), `framer-motion` (Animations)

### DevOps & Infrastructure
- **Cloud Provider**: Microsoft Azure (App Service, Linux B1)
- **IaC**: Terraform (Infrastructure provisioning)
- **CI/CD**: GitHub Actions (Automated Build & Deploy)
- **Pipeline Strategy**: Artifact-based deployment with specific startup commands for SPA.

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 20+
- npm

### Local Development
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/JulioJosueG/devops-portfolio.git
    cd devops-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173).

## ☁️ Deployment Guide

This project uses a fully automated DevOps pipeline.

### 1. Infrastructure Provisioning (Terraform)
Navigate to the `/terraform` directory to provision the Azure resources.

```bash
cd terraform
terraform init
terraform apply -var="subscription_id=<YOUR_AZURE_SUBSCRIPTION_ID>"
```
*Creates: Resource Group, App Service Plan (Linux), and Web App.*

### 2. CI/CD Pipeline (GitHub Actions)
The workflow is defined in `.github/workflows/deploy.yml`.

- **Trigger**: Push to `master` branch.
- **Build Job**: Compiles TypeScript/Vite application.
- **Deploy Job**: Deploys the artifact to Azure App Service.

**Configuration Required in GitHub Secrets**:
- `AZURE_WEBAPP_PUBLISH_PROFILE`: XML content from your Azure Web App's "Get publish profile".

## 📂 Project Structure

```
/
├── src/
│   ├── components/     # UI Components (Hero, About, Projects)
│   ├── pages/          # Page layouts
│   └── index.css       # Tailwind directives
├── terraform/          # Infrastructure as Code definitions
├── .github/workflows/  # CI/CD Pipeline definitions
└── package.json
```

## 📄 License
MIT
