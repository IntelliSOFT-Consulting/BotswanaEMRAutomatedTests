/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe("User account page", () => {
  beforeEach(() => {
    cy.login("admin", "Y3z44AH2");

    cy.eyesOpen({
      appName: "Location Page",
      testName:
        "Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page and can be interacted with",
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  //********tests-cases*********

  it("TP00-Should actually be accessible", () => {
    cy.visit(
      "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/selectServicePoint.page"
    );
  });

  

  it(`TP01-Verifying visibility of the page objects`, () => {
    //applitools eyes test
    cy.eyesCheckWindow({
      tag: "TP01-Verifying visibility of the elements on the page",
      target: "window",
      fully: true,
    });
  });

  it(`TP02-Verifying Location text-box can be selected`, () => {
    cy.get("#sessionLocationId").select("Registration Desk").should("have.value", "5");
  });

  it(`TP03-Verify that the user is able to login by entering valid credentials and clicking on the ‘Check in’ button.`, () => {
    cy.get("#loggedInLocationId").select("Sebele Clinic");
    cy.get("#sessionLocationId").select("Registration Desk");

    cy.contains("button", "Check in").click();

    cy.url().should("contain", "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/registrationAdminDashboard.page?appId=botswanaemr.registrationAdminDashboard");
  });
});
