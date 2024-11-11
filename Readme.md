# BotswanaEMR Cypress Test Scripts

![BotswanaEMR Logo](/Assets/bitri.png)

This repository contains Cypress test scripts for the BotswanaEMR project. These tests are designed to ensure the functionality and integrity of the BotswanaEMR web application.

## Getting Started

These instructions will help you set up and run the Cypress test scripts for BotswanaEMR on your local machine.

### Prerequisites

Before running the tests, make sure you have the following software installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/BotswanaEMR-Cypress.git
```

2. Navigate to the project directory:

```bash
cd BotswanaEMR-Cypress
```

3. Install the project dependencies:

```bash
npm install
```

### Running Tests

You can run the Cypress tests using the following command:

```bash
npx cypress open

or, for headless mode 

npx cypress run     
```

This command will open the Cypress Test Runner, where you can select and run individual test files or all tests at once.

### Configuration

You can customize the test environment and configurations by modifying the [Cypress configuration files](https://docs.cypress.io/guides/references/configuration).

### Writing Tests

Cypress test scripts are located in the `cypress/integration` directory. You can add, modify, or delete test scripts to suit your project's requirements. Make sure to follow best practices for writing Cypress tests.

### Continuous Integration

These Cypress tests can be integrated into your CI/CD pipeline to ensure continuous testing of your application.

### Reporting

Cypress generates detailed test reports by default. You can find the test results and screenshots in the `cypress/screenshots` and `cypress/videos` directories.

## Contributing

If you would like to contribute to this project, please follow our [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

We would like to thank the Cypress community for their fantastic testing framework.

Happy testing!

![Cypress Logo](/Assets/cypress.png)

