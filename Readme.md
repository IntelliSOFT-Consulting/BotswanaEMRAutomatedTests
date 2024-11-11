# BotswanaEMR Cypress Tests

This repository contains automated end-to-end tests for the BotswanaEMR (BEMR) project, designed to ensure the system's core functionalities work as expected. These tests are built using [Cypress](https://www.cypress.io/), a JavaScript-based testing framework known for its reliability in testing modern web applications.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Writing Guide](#test-writing-guide)
- [Reporting](#reporting)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

---

## Project Structure

The project is organized into the following key directories:

- **cypress/e2e/**: Contains the end-to-end test cases for BEMR, categorized by feature.
- **cypress/fixtures/**: Stores static data files used for testing, such as mock data in JSON format.
- **cypress/support/**: Holds custom commands and reusable functions that enhance the test scripts and help manage configuration.

## Installation

To set up the project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/IntelliSOFT-Consulting BotswanaEMRAutomatedTests.git
   cd BotswanaEMRAutomatedTests
   ```
2. **Install Dependencies**: Ensure you have Node.js installed, then run:

    ```
    npm install
    ```

## Running Tests
Cypress tests can be run in two modes: headless (CLI) or in the interactive Cypress Test Runner.

- Run tests in headless mode:

  ```bash
  npx cypress run
  ```
- Run tests in the interactive Cypress Test Runner:

  ```bash
  npx cypress open
  ```
This will open a visual interface where you can manually trigger tests and watch them run step-by-step.

## Running Specific Tests
To run a specific test or group of tests, add the file path:

  ```bash
  npx cypress run --spec "cypress/e2e/path/to/your-test-file.cy.js"
  ```

## Test Writing Guide
1. **File Naming** : Follow a consistent naming convention like feature-name.cy.js for test files to ensure clarity.

2. **Assertions** : Use Cypress assertions to verify that elements and workflows are functioning as expected.
3. **Best Practices** :
- Reuse custom commands from the cypress/support/commands.js file to keep tests DRY (Don't Repeat Yourself).
- Use fixtures for test data, allowing tests to stay isolated and maintainable.

## Reporting
BEMR Cypress tests use Mocha and JUnit reporters for tracking test results:

1. **Generate a report by running** :

  ```bash
  npx cypress run --reporter junit --reporter-options "mochaFile=reports/test-results.xml,toConsole=true"
  ```
2. **Access reports** : Test results are saved in the reports/ directory and can be integrated with CI/CD pipelines for continuous reporting.

## Troubleshooting
- Common Issues:
  - Network Errors: Ensure stable internet and server connection.
  - Session Issues: Cypress v12+ requires `cy.session()` for session handling; check the `cypress/support/commands.js` for configured session commands.

## Contributing
We welcome contributions to improve our Cypress tests. Please follow the steps below:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.


**Happy Testing!**



