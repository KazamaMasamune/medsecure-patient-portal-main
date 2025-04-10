# Secure Microservices-Based Healthcare Application 🩺

![Project Logo](https://via.placeholder.com/150.png?text=MedSecure)  
[![GitHub stars](https://img.shields.io/github/stars/KazamaMasamune/medsecure-patient-portal-main)](https://github.com/KazamaMasamune/medsecure-patient-portal-main/stargazers)  
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Introduction

The **Secure Microservices-Based Healthcare Application** is a robust, scalable, and secure platform designed to streamline healthcare operations. It focuses on patient management, appointment scheduling, and billing, while ensuring compliance with healthcare standards like HIPAA. The application leverages a microservices architecture for modularity and scalability, with strong security measures to protect sensitive healthcare data.

This project was built to provide a seamless experience for patients and healthcare providers, with a user-friendly frontend and a secure backend. It integrates modern technologies and best practices to ensure data privacy, security, and accessibility.

## Features

- 🧑‍⚕️ **Patient Management**: Manage patient records securely with role-based access control.
- 📅 **Appointment Scheduling**: Schedule and manage appointments with ease.
- 💳 **Billing System**: Handle billing and payments for healthcare services.
- 🔒 **Robust Security**: OAuth2/JWT authentication, CyberArk integration, and HIPAA-compliant data encryption.
- 📱 **Responsive UI**: User-friendly patient portal and admin dashboard built with ReactJS and Material-UI.
- ☁️ **Cloud Deployment**: Deployed on AWS ECS with S3 for secure file storage.

## Technologies Used

- **Backend**:
  - Java 11
  - Spring Boot
  - Spring Cloud (Eureka for service discovery)
  - Spring Security (OAuth2/JWT)
  - PostgreSQL (patient records)
  - MongoDB (medical images/documents)
- **Frontend**:
  - ReactJS
  - Material-UI
- **Security**:
  - CyberArk (privileged access management)
  - OWASP ZAP (security audits)
- **Deployment**:
  - AWS ECS (containerized deployment)
  - AWS S3 (file storage)
- **Standards**:
  - HIPAA compliance (data encryption at rest and in transit)

## Architecture

The application follows a microservices architecture, with the following components:

- **Patient Service**: Manages patient records and profiles.
- **Appointment Service**: Handles appointment scheduling and notifications.
- **Billing Service**: Processes billing and payments.
- **Eureka Server**: Service discovery for microservices.
- **API Gateway**: Routes requests to appropriate microservices.
- **Frontend**:
  - Patient Portal: For patients to manage their data and appointments.
  - Admin Dashboard: For healthcare providers to manage operations.

The microservices communicate via REST APIs, with Spring Cloud Eureka enabling service discovery. The API Gateway routes requests securely, and OAuth2/JWT ensures authenticated access. Data is stored in PostgreSQL for structured patient records and MongoDB for unstructured data like medical images.

For more details, see the [architecture documentation](docs/architecture.md).

## Installation

Follow these steps to set up the project locally.

### Prerequisites
- Java 11 (JDK)
- Node.js (v16 or higher) and npm
- PostgreSQL (v13 or higher)
- MongoDB (v4 or higher)
- Maven (for building Java microservices)
- AWS CLI (for deployment)
- CyberArk (for privileged access management)

### Backend Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/KazamaMasamune/medsecure-patient-portal-main.git
   cd medsecure-patient-portal-main
