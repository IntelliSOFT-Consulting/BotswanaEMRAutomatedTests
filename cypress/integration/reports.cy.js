import faker from 'faker';

const firstName = faker.name.firstName();
const familyName = faker.name.lastName();


describe("NaCaRe -KE 2.0 Automated test", () => {
  it("Visits the homepage", () => {
    cy.visit("http://45.79.116.38:8080/dhis-web-commons/security/login.action");
  });

  it(`TEST 1 -Verify that as soon as the login page opens, by default the cursor should remain on the username textbox.`, () => {
    cy.focused().should("have.id", "j_username");
  });

  it(`TEST 2 -Login and access the registration page`, () => {
    cy.get("#j_username").type("admin");
    cy.get("#j_password").type("district");

    cy.get("#submit").click();

    cy.wait(7000);

    cy.get('[data-test="headerbar-apps-icon"]').click();
    cy.get(
      '[href="http://45.79.116.38:8080/api/apps/Cancer-Notification-Tool/index.html"]'
    ).click();

    cy.get(".ant-input").type("aga khan");
    cy.contains("Aga Khan Bomet").click();

    cy.get(
      '[href="#/search/pZSnyiO9EF7?stage=attributes"] > .formList-0-2-5'
    ).click();
  });
});
