# AWS CI/CD Pipeline – Node.js Application

This project demonstrates a simple **CI/CD pipeline on AWS** that automatically deploys a Node.js web application using:

**GitHub → CodePipeline → CodeBuild → CodeDeploy → EC2**

The setup is intentionally simple and suitable for learning, labs, and assignments.

---

## 📌 Architecture Overview
GitHub
↓
CodePipeline
↓
CodeBuild
↓
CodeDeploy
↓
EC2 (Amazon Linux 2)

---

## 🧩 Application Overview

- Node.js + Express web application
- Runs on port **3000**
- Simple health check endpoint
- Automatically deployed to EC2 using AWS CodeDeploy

### Endpoints
| Endpoint | Description |
|--------|-------------|
| `/` | Application home |
| `/health` | Health check |

---

## 📁 Project Structure
```
nodejs-aws-cicd/
├── app.js                  # Main Node.js application
├── package.json            # Node.js dependencies and scripts
├── buildspec.yml            # AWS CodeBuild instructions
├── appspec.yml              # AWS CodeDeploy deployment configuration
├── scripts/                 # Deployment lifecycle scripts
│   ├── install_dependencies.sh  # Installs npm dependencies on EC2
│   ├── start_server.sh          # Starts the Node.js application
│   └── stop_server.sh           # Stops the running Node.js application
└── README.md                # Project documentation
```
---

## 🪜 CI/CD Pipeline Tasks

### ✅ Task 1: Prepare Source Code
- Simple Node.js Express application
- `buildspec.yml` added for AWS CodeBuild
- `appspec.yml` added for AWS CodeDeploy

---

### ✅ Task 2: S3 Bucket for Artifacts
- S3 bucket created to store build artifacts
- Versioning enabled for rollback support
- Used by CodeBuild and CodePipeline

---

### ✅ Task 3: CodeBuild Configuration
- Connected to GitHub repository
- Node.js runtime environment
- Uses `buildspec.yml`
- Outputs artifacts to S3

---

### ✅ Task 4: CodeDeploy Configuration
- EC2 instance running Amazon Linux 2
- CodeDeploy agent installed
- Separate IAM roles used:
  - **CodeDeploy service role**
  - **EC2 instance role**
- Deployment managed via `appspec.yml`

---

### ✅ Task 5: CodePipeline
- Source stage: GitHub
- Build stage: CodeBuild
- Deploy stage: CodeDeploy
- Automatic deployment to EC2 on every commit

---

## 🔐 IAM Roles Used

### 1️⃣ CodeDeploy Service Role
- Trusted entity: `codedeploy.amazonaws.com`
- Policy attached:
  - `AWSCodeDeployRole`
- Used by CodeDeploy deployment group

### 2️⃣ EC2 Instance Role
- Trusted entity: `ec2.amazonaws.com`
- Policies attached:
  - `AmazonEC2RoleforAWSCodeDeploy`
  - `AmazonS3ReadOnlyAccess`
- Attached to EC2 instance

⚠️ These roles **must be separate**

---

## 🚀 How to Run Locally

```bash
npm install
npm start
```
Open in browser:
http://localhost:3000


