/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />


describe("Emergency Registration test scripts", () => {
  beforeEach(() => {
    cy.locations("admin", "Y3z44AH2");

    // cy.eyesOpen({
    //   appName: "Location Page",
    //   testName:
    //     "Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page and can be interacted with",
    // });
  });

  // afterEach(() => {
  //   cy.eyesClose();
  // });

  //********tests-cases*********

  it("TEST 1-Should actually be accessible", () => {
    cy.visit(
      "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/registrationAdminDashboard.page?appId=botswanaemr.registrationAdminDashboard"
    );
  });

  // it(`TEST 2-Verifying visibility of the page objects`, () => {
  //   //applitools eyes test
  //   cy.eyesCheckWindow({
  //     tag: "TP01-Verifying visibility of the elements on the page",
  //     target: "window",
  //     fully: true,
  //   });
  // });

  it(`TEST 3-Verifying successful registration of emergency patients`, () => {
    cy.contains("button", "Register New Patient").click();

    cy.get("#find-patients")
      .type("Jane Doe{enter}")
      .should("have.value", "Jane Doe");
    // cy.get('.fa-search').click()

    cy.contains("Create New Record >>").click();

    cy.get("#emergencyCheck").click();

    cy.contains("button", "Next Step").click();

    cy.get("#name").type("John Juma").should("have.value", "John Juma");

    cy.contains("button", "Complete").click();

    cy.wait(1000);
    cy.get("#queueRoom").select("Screening");

    cy.contains("button", "Assign Patient").click();

    cy.wait(2000);

    // cy.contains('Juma John').should('be.visible')
  });
});

