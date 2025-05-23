# 🛍️ Alyaa Store - Premium E-Commerce Platform

<div align="center">

![Angular](https://img.shields.io/badge/Angular-19.2.0-red?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.6-purple?style=for-the-badge&logo=bootstrap)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, responsive e-commerce application built with Angular 19**

[Live Demo](#-live-demo) • [Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Documentation](#-api-documentation)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌟 Overview

**Alyaa Store** is a premium e-commerce platform designed for modern businesses. Built with Angular 19 and featuring a sleek, professional design, it provides a comprehensive solution for product management, user authentication, and online shopping experiences.

### 🎯 Project Goals

- Create a modern, responsive e-commerce platform
- Implement professional UI/UX design principles
- Provide comprehensive product management features
- Ensure mobile-first responsive design
- Maintain clean, scalable code architecture

---

## ✨ Features

### 🛒 **Product Management**
- **Modern Product Catalog**: Grid and list view options with advanced filtering
- **Product Details**: Comprehensive product pages with image galleries and specifications
- **CRUD Operations**: Full Create, Read, Update, Delete functionality
- **Search & Filter**: Real-time search with sorting capabilities
- **Stock Management**: Inventory tracking with status indicators

### 🔐 **Authentication System**
- **User Registration**: Complete signup process with validation
- **Secure Login**: Professional login interface with form validation
- **Password Security**: Password visibility toggle and strength indicators
- **Social Login Ready**: UI prepared for Google and Facebook integration

### 🎨 **Modern UI/UX**
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Professional Theme**: Purple gradient color scheme with smooth animations
- **Interactive Elements**: Hover effects, loading states, and micro-interactions
- **Accessibility**: WCAG compliant with proper ARIA labels

### 📊 **Dashboard & Analytics**
- **Product Statistics**: Real-time inventory and sales metrics
- **Visual Indicators**: Stock status, pricing, and category management
- **Professional Cards**: Modern card-based layout throughout

### 🔧 **Technical Features**
- **Angular 19**: Latest Angular framework with standalone components
- **TypeScript**: Full type safety and modern JavaScript features
- **Reactive Forms**: Advanced form validation and error handling
- **Routing**: Professional navigation with breadcrumbs
- **Services**: Modular service architecture for data management

---

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Angular 19.2.0
- **Language**: TypeScript 5.0+
- **Styling**: Bootstrap 5.3.6 + Custom CSS
- **Icons**: Bootstrap Icons 1.13.1
- **Fonts**: Google Fonts (Inter)

### **Development Tools**
- **CLI**: Angular CLI 19.2.12
- **Package Manager**: npm
- **Testing**: Karma + Jasmine
- **Build Tool**: Angular Build System
- **Development Server**: Angular Dev Server with HMR

### **Architecture**
- **Components**: Standalone Angular Components
- **Services**: Injectable Services with Dependency Injection
- **Routing**: Angular Router with Guards
- **State Management**: Service-based state management
- **Forms**: Reactive Forms with Validation

---

## 🚀 Installation

### **Prerequisites**

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher)
- **Angular CLI** (v19.0.0 or higher)

```bash
# Check versions
node --version
npm --version
ng version
```

### **Quick Start**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/alyaa-store.git
   cd alyaa-store
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   # or
   ng serve
   ```

4. **Open your browser**
   ```
   http://localhost:4200
   ```

### **Alternative Installation Methods**

**Using Yarn:**
```bash
yarn install
yarn start
```

**Using Docker:**
```bash
docker build -t alyaa-store .
docker run -p 4200:4200 alyaa-store
```

---

## 📖 Usage

### **Development Commands**

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Generate component
ng generate component component-name

# Generate service
ng generate service service-name
```

### **Available Scripts**

| Command | Description |
|---------|-------------|
| `npm start` | Start development server on port 4200 |
| `npm run build` | Build the app for production |
| `npm test` | Run unit tests with Karma |
| `npm run lint` | Run ESLint for code quality |
| `npm run e2e` | Run end-to-end tests |

### **Environment Configuration**

Create environment files for different stages:

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  appName: 'Alyaa Store'
};
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── header/         # Navigation header
│   │   ├── footer/         # Site footer
│   │   └── table/          # Data table component
│   ├── pages/              # Page components
│   │   ├── home/           # Homepage
│   │   ├── products/       # Product management
│   │   ├── auth/           # Authentication pages
│   │   └── not-found/      # 404 page
│   ├── services/           # Business logic services
│   │   └── static-product.service.ts
│   ├── models/             # TypeScript interfaces
│   │   └── iproduct.ts
│   ├── shared/             # Shared components
│   └── app.routes.ts       # Application routing
├── assets/                 # Static assets
├── environments/           # Environment configurations
└── styles.css             # Global styles
```

---

## 🔌 API Documentation

### **Product Service Methods**

```typescript
// Get all products
getAllProducts(): Iproduct[]

// Get product by ID
getProductById(id: string): Iproduct | undefined

// Add new product
addNewProduct(product: Iproduct): void

// Update existing product
updateProduct(product: Iproduct): void

// Delete product
deleteProduct(id: string): void
```

### **Product Interface**

```typescript
interface Iproduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
  category?: string;
  description?: string;
  features?: string[];
}
```

---

## 📸 Screenshots

### **Homepage**
![Homepage](docs/images/homepage.png)
*Modern landing page with hero section and about information*

### **Products Page**
![Products](docs/images/products.png)
*Advanced product management with search, filter, and view options*

### **Product Details**
![Product Details](docs/images/product-details.png)
*Comprehensive product page with image gallery and specifications*

### **Authentication**
![Login](docs/images/login.png)
*Professional login and registration pages*

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### **Development Workflow**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests**
   ```bash
   npm test
   npm run lint
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### **Code Style Guidelines**

- Follow Angular Style Guide
- Use TypeScript strict mode
- Write meaningful commit messages
- Add tests for new features
- Update documentation

### **Reporting Issues**

Please use the [GitHub Issues](https://github.com/yourusername/alyaa-store/issues) page to report bugs or request features.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Alyaa Mahmoud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 📞 Contact

### **Developer Information**

**Alyaa Mahmoud**
- 📧 Email: [aliaa23mahmoud@gmail.com](mailto:aliaa23mahmoud@gmail.com)
- 💼 LinkedIn: [Connect with me](https://linkedin.com/in/alyaa-mahmoud)
- 🐙 GitHub: [@Alyaa289](https://github.com/Alyaa289)
- 🌐 Portfolio: [alyaa-portfolio.com](https://alyaa-portfolio.com)

### **Project Links**

- 📦 **Repository**: [GitHub](https://github.com/Alyaa289/alyaa-store)
- 🌐 **Live Demo**: [Alyaa Store](https://alyaa-store.netlify.app)
- 📋 **Issues**: [Report Bug](https://github.com/Alyaa289/alyaa-store/issues)
- 💡 **Feature Requests**: [Request Feature](https://github.com/Alyaa289/alyaa-store/issues/new)

---

## 🙏 Acknowledgments

- **Angular Team** for the amazing framework
- **Bootstrap Team** for the responsive CSS framework
- **Unsplash** for providing high-quality product images
- **Google Fonts** for the beautiful typography
- **Community Contributors** for their valuable feedback

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Alyaa Mahmoud](https://github.com/Alyaa289)

</div>
