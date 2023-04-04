// ***********************************************
import "@cypress-audit/lighthouse/commands";

// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.visit("http://botswanaemrdemo.intellisoftkenya.com/openmrs/login.htm");
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  // cy.get("select").select("Sebele Clinic");

  cy.contains("button", "Sign in").click();
  cy.url().should("contain", "/botswanaemr/selectServicePoint.page");
});

Cypress.Commands.add("locations", (username, password) => {
  cy.visit("http://botswanaemrdemo.intellisoftkenya.com/openmrs/login.htm");
  cy.get("#username").type(username);
  cy.wait(1000);
  cy.get("#password").type(password);

  cy.contains("button", "Sign in").click();
  cy.url().should("contain", "/botswanaemr/selectServicePoint.page");

  cy.get("#loggedInLocationId").select("Sebele Clinic");
  cy.get("#sessionLocationId").select("Registration Desk");

  cy.contains("button", "Check in").click();

  cy.url().should(
    "contain",
    "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/registrationAdminDashboard.page?appId=botswanaemr.registrationAdminDashboard"
  );
});

// Access element whose parent is hidden
Cypress.Commands.add(
  "isVisible",
  {
    prevSubject: true,
  },
  (subject) => {
    const isVisible = (elem) =>
      !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    expect(isVisible(subject[0])).to.be.true;
  }
);
