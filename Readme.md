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



## 2. Fork this repo
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


## 3. Run the tests
The tests are located in the cypress/integration folder. The tests are grouped into folders based on the module they are testing. The tests are also grouped into files based on the functionality they are testing. The tests are also commented to explain what they are testing.

To run each test, access the cypress window that pops up when the ``` npx cypress open ``` command is typed and ran in the terminal.
Click on the test folder and then click on the specific test you want to run. The test will then run on your browser.

```

NB: For each test, the site will be accessed and the user will be logged in. 
This is done to ensure that the tests are independent of each other. 
This means that the tests can be run in any order and they will still pass.

```


## AUTHENTICATION-FOLDER TESTS
Select the Authentication folder. 

### 3.1 Login-test.spec.js
click on the Login-test.spec.js file to run the test. This test should login to the application and verify that the user is logged in.


### 3.2 location.spec.js
click on the location.spec.js file to run the test. This test should select a facility and service location then verify that the site has accessed the correct facility and service location.


## REGISTRATION-FOLDER TESTS

### 3.3 registration.spec.js
This test will register a patient and verify that the patient has been registered.

#### 3.3.1 Emergency Patient Registration
This test will register an emergency patient and verify that the patient has been registered and assigned to the correct service location (Screening).

#### 3.3.2 Regular Patient Registration
This test will register a regular patient and verify that the patient has been registered and assigned to the correct service location (Screening).

### 3.4 screening.spec.js
This test will access the screening module and verify that the module has been accessed, then proceed with the screening process for the patient registered in the last test and verify that the patient has been correctly screened, then assigned the patient to the correct service location (Consultation).

### 3.5 consultation.spec.js
This test will access the consultation module and verify that the module has been accessed, then proceed with the consultation process for the patient screened in the last test, by beginning a consultation and then verify that the patient has been correctly assesed and diagnosed.The patient should then be assigned the patient to the correct service location, in this case, pharmacy.

### 3.6 pharmacy.spec.js

### 3.7 stock-management.spec.js

### 3.8 System-Administration.spec.js




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

