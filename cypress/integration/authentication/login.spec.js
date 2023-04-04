/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe(`The user is able to see the labels and controls including text-boxes, buttons and labels on the Login Page and can interacted with.`, () => {
  beforeEach(() => {
    cy.visit("http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs");

    cy.eyesOpen({
      appName: "Login Page",
      testName:
        "Verify that all the labels and controls  are present and can be interacted with.",
    });
  });

  afterEach(() => {
    cy.eyesClose();
  });

  //********tests-cases*********

  it(`Test 1-Verifying visibility of the page objects`, () => {
    //applitools eyes test
    cy.eyesCheckWindow({
      tag: "LP01-Verifying visibility of the elements on the page",
      target: "window",
      fully: true,
    });
  });

  it(`Test 2-Verifying Username text-box can take text input`, () => {
    cy.get("#username").type("admin").should("have.value", "admin");
  });

  it(`Test 3-Verifying Password text-box can take text input.`, () => {
    cy.get("#password").type("Y3z44AH2").should("have.value", "Y3z44AH2");
  });
});

describe(`The user can interact with the UI via varius actions (positive/negative)`, () => {
  beforeEach(() => {
    cy.visit("http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs");
  });

  //********tests-cases*********

  it(`Test 4 - Verify that as soon as the login page opens, by default the cursor should remain on the username textbox.`, () => {
    //Verify that as soon as the login page opens, by default the cursor should remain on the username textbox
    cy.focused().should("have.id", "username");
  });

  //   it(`LP06-Verify that the user is able to navigate to "Password" field by pressing "TAB" key on the keyboard.`, () => {
  //     cy.get("body").tab();

  //     cy.focused().should("have.id", "password-field");
  //   });

  //   it(`LP07-Verify that the user is able to navigate to "Login" button by pressing "TAB" key on the keyboard.`, () => {
  //     cy.get("body").tab().tab();

  //     cy.focused().should("have.id", "signin-button");
  //   });

  it(`Test 5-Verifying that  the password as it is being typed in is being hashed and can't be copied`, () => {
    cy.get("#password").invoke("attr", "type").should("contain", "password");
  });

  it(`Test 6-Verify that the user is able to login by entering valid credentials and clicking on the ‘Login’ button.`, () => {
    enterLoginDetails("admin", "Y3z44AH2");

    cy.contains("button", "Sign in").click();

    cy.url().should("contain", "/botswanaemr/selectServicePoint.page");
  });

  it(`Test 7-Verify that the user is able to login by entering valid credentials and pressing Enter key.`, () => {
    enterLoginDetails("admin", "Y3z44AH2");

    cy.focused().type("{enter}");

    cy.url().should("contain", "/botswanaemr/selectServicePoint.page");
  });

  it(`Test 8-Verify that the user is NOT able to login by entering INVALID credentials and clicking on the ‘Login’ button.`, () => {
    enterLoginDetails("bla", "blabla");

    cy.contains("button", "Sign in").click();

    cy.get("#error-message").should(
      "have.text",
      "Invalid username/password. Please try again."
    );
  });

  it(`Test 9-Verify that the validation message gets displayed in case the user leaves the username field as blank and that the message does not indicate which is wrong or empty.`, () => {
    enterLoginDetails("", "Y3z44AH2");

    cy.contains("button", "Sign in").click();

    cy.get("#error-message").should(
      "have.text",
      "Invalid username/password. Please try again."
    );
  });

  it(`Test 10-Verify that the validation message gets displayed in case the user leaves the password field as blank and that the message does not indicate which is wrong or empty.`, () => {
    enterLoginDetails("admin", "");

    cy.contains("button", "Sign in").click();

    cy.get("#error-message").should(
      "have.text",
      "Invalid username/password. Please try again."
    );
  });
});

function enterLoginDetails(username, thePassword) {
  //have to do this check as .type does not take empty strings
  if (!username == "") {
    cy.get("#username").type(username).should("have.value", username);
  }

  if (!thePassword == "") {
    cy.get("#password").type(thePassword).should("have.value", thePassword);
  }
}
