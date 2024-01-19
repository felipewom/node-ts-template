# Node.js TypeScript Project Template
[![GitHub License](https://img.shields.io/github/license/felipewom/node-ts-template)](LICENSE)
[![Buy Me A Coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg)](https://www.buymeacoffee.com/felipewom)

## Overview

This is a template for kickstart Node.js TypeScript projects with best practices in mind. 

It includes configurations for ESLint, Prettier, Jest, and Zod to ensure code quality, consistency, and maintainability.
___
### Features

- ✨ **Node.js + TypeScript**: Build robust applications with TypeScript in a Node.js environment.
- 🧹 **ESLint and Prettier**: Enforce code quality and formatting standards.
- 🚦 **Jest**: Testing framework for unit and integration tests.
- 🔒 **Zod**: Enforce strong typing and validate data structures.

## Getting Started

Follow these steps to use the template:

### 1. **Clone the Repository:**

```bash
git clone https://github.com/felipewom/node-ts-template.git your-project-name
```

### 2. **Install Dependencies:**

```bash
cd your-project-name
npm install
```

### 3. **Run in Development Mode:**

```bash
npm run dev
```
_This will run the application in development mode with `ts-node-dev` and hot reloading._

```bash
npm run debug
```
_You can also run the application in debug mode with `ts-node-dev` and hot reloading._


### 4. **Lint Code:**

```bash
npm run lint
```

### 5. **Run Tests:**

```bash
npm test
```
_This will run all tests with `jest` unit-tests and e2e-tests._

_You can also run tests separately:_

```bash
npm run test:unit
```
_This will run unit-tests with `jest`._

```bash
npm run test:e2e
```
_This will run e2e-tests with `jest`._

### 6. **Build for Production:**

```bash
npm run build
```
_This will build the application for production with `tsc`._

### 7. **Run in Production Mode:**

```bash
npm start
```
_This will run the application in production mode with `node`._

## Project Structure

- 📁 **src**: Application source code.
- 📁 **tests**: Test files.
- 📁 **templates**: Template files for project generation (if applicable).
- 📄 **.eslintrc.js**: ESLint configuration.
- 📄 **.prettierrc.js**: Prettier configuration.
- 📄 **jest.config.js**: Jest configuration.
- 📄 **tsconfig.json**: TypeScript configuration.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Make your changes.
4. Commit your changes: `git commit -m 'Add new feature'`.
5. Push to the branch: `git push origin feature/your-feature`.
6. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
