This repo contains tests written in Cypress.

The tests are heavily commented to ease you into the Cypress API.

## Help + Testing
The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

If you get stuck, here is more help:

[Gitter Channel](https://app.gitter.im/#/room/#cypress-io_cypress:gitter.im)
[Cypress Docs](https://docs.cypress.io/guides/overview/why-cypress)
[Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)
## 1. Install Cypress
Follow [these](https://docs.cypress.io/guides/getting-started/installing-cypress) instructions to install Cypress. 
(This specific tests run on cypress version @9.5.0)

Run this command to install the specific version needed for this project.

`npm cypress install@9.5.0`



## Fork this repo
You'll need to fork the project first.

After forking this project in Github, run these commands:

```
## clone this repo to a local directory
git clone https://github.com/IntelliSOFT-Consulting/BotswanaEMRAutomatedTests.git

## cd into the cloned repo
cd BotswanaEMRAutomatedTests

## install the node_modules
npm install

## start the local webserver
npx cypress open 
The npm cypress start script will spawn a new cypress tab which hosts the test scripts that can then be run on your browser.

```


## Run the tests
The tests are located in the cypress/integration folder. The tests are grouped into folders based on the module they are testing. The tests are also grouped into files based on the functionality they are testing. The tests are also commented to explain what they are testing.

To run each test, access the cypress window that pops up when the ``` npx cypress open ``` command is typed and ran in the terminal.
Click on the test folder and then click on the specific test you want to run. The test will then run on your browser.

```

NB: For each test, the site will be accessed and the user will be logged in. 
This is done to ensure that the tests are independent of each other. 
This means that the tests can be run in any order and they will still pass.

```


## File structure
```
.
├── cypress
│   ├── fixtures // Test fixtures (e.g. attachments)
│   │   └── test_image.jpeg
│   ├── integration
│   │  ├── authentication // Tests for the authentication module
│   │  |     ├── login-test.spec.js
│   │  |     └── location.spec.js
│   │  |
│   │  ├── consultation // Tests for the consultation module
│   │  |     └── consultation.spec.js
│   │  ├── pharmacy // Tests for the pharmacy module
│   │  |     ├── pharmacy.spec.js
|   |  |     └── Quick-registration.spec.js
│   │  |            ...
│   ├── plugins
│   │   └── index.js
│   ├── screenshots // Screenshots (set "screenshot": true in cypress.json)
│   ├── support
│   │   ├── commands.js // Custom commands for Cypress
|   |   ├── eyes-index.d.ts // Custom commands for Cypress (Applitools eyes)
│   │   └── index.js
│   ├── videos  // Screen recordings (set "video": true in cypress.json)
│   └── cypress.json // Cypress configuration file
├── README.md
├── cypress.json // Cypress configuration file
├── package.json
└── applitools.config.js // Applitools configuration file

```


## 1. AUTHENTICATION
Select the Authentication folder. 

### Login-test.spec.js
click on the Login-test.spec.js file to run the test. This test should login to the application and verify that the user is logged in.

### location.spec.js
click on the location.spec.js file to run the test. This test should select a facility and service location then verify that the site has accessed the correct facility and service location.


## 2. REGISTRATION
Select the Registration folder.

### Emergency Patient Registration
This test will register an emergency patient and verify that the patient has been registered and assigned to the correct service location (Screening).

### Regular Patient Registration
This test will register a regular patient and verify that the patient has been registered and assigned to the correct service location (Screening).


## 3. SCREENING
Select the Screening folder.

### screening.spec.js
This test will access the screening module and verify that the module has been accessed, then proceed with the screening process for the patient registered in the last test and verify that the patient has been correctly screened, then assigned the patient to the correct service location (Consultation).


## 4. CONSULTATION
Select the Consultation folder.

### consultation.spec.js
This test will access the consultation module and verify that the module has been accessed, then proceed with the consultation process for the patient screened in the last test, by beginning a consultation and then verify that the patient has been correctly assesed and diagnosed.The patient should then be assigned the patient to the correct service location, in this case, pharmacy.


## PHARMACY
Select the Pharmacy folder.

### pharmacy.spec.js
This test will access the pharmacy module, then head to the quick registration option then register a patient who is then automatically assigned to the pharmacy module. The test will then verify that the patient has been correctly registered and assigned to the correct service location (Pharmacy).
Then the test will prescribe a pre-selected drug to the patient and verify that the drug has been successfully prescribed to the patient.
Then finally, the test will dispense the drug to the patient and verify that the drug has been successfully dispensed to the patient.


## 5. STOCK MANAGEMENT
Select the Stock Management folder.

### stock-management.spec.js
This test will access the stock management module , then proceed with the normal stock management workflow and test that all forms and functionalities are working as expected.

## 6. HIV TESTING SERVICES (HTS)
Select the HIV Testing Services (HTS) folder.

### hts.spec.js
This test will access the HIV Testing Services (HTS) module , then proceed with the normal HIV Testing Services (HTS) workflow and test that all forms and saving functionalities are working as expected.


## 7. SAFE MALE CIRCUMCISION (SMC)
Select the SMC folder.

### smc.spec.js
This test will access the SMC module , then proceed with the normal SMC workflow and test that all forms and saving functionalities are working as expected.


## 8. ART
Select the ART folder.

### art.spec.js
This test will access the ART module , then proceed with the normal ART workflow and test that all forms and saving functionalities are working as expected.


## 9. TB
Select the TB folder.

### tb.spec.js
This test will access the TB module , then proceed with the normal TB workflow and test that all forms and saving functionalities are working as expected.


## 10. SEXUAL AND REPRODUCTIVE HEALTH (SRH)
Select the SRH folder.

### srh.spec.js
This test will access the SRH module , then proceed with the normal SRH workflow and test that all forms and saving functionalities are working as expected.


```
THE TESTS BELOW APPEAR IN MOST PAGES SO THEY ARE NOT REPEATED IN EACH FOLDER

```

### Reports.spec.js
This test will access the REPORTS pages in each page and verify that all the required reports are rendered and downloaded as expected.

### System-Administration.spec.js
This test will access the System-Administration pages and verify that a user can create, edit, delete, activate or deactivate a user account as needed.




Cypress IntelliSense
If you use modern IDE that supports TypeScript (like VSCode), you can benefit from Cypress type declarations included with the cypress NPM module. Just add @ts-check to the spec file and configure "dummy" tsconfig.json file and see IntelliSense over cy.<something> commands.

cy.type IntelliSense

Custom commands
This project also adds several custom commands in cypress/support/commands.js. They are useful to create one or more default todos from the tests.

```

it('should append new items to the bottom of the list', function () {
  cy.createDefaultTodos().as('todos')
  // more test commands
})

```

## Support
If you find errors in the documentation, please open an issue.

