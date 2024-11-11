/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe("User account page", () => {
  beforeEach(() => {
    cy.locations("admin", "Admin123");

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

  it(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("M");
    cy.get("#userName").type("User1");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("user");

    cy.get("#personFamilyName").type("1");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User2");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("2");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User3");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("3");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("M");
    cy.get("#userName").type("User4");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("4");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("M");
    cy.get("#userName").type("User5");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("5");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("M");
    cy.get("#userName").type("User6");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("6");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("M");
    cy.get("#userName").type("User7");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("7");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User8");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("8");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User9");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("9");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User10");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("10");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User11");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("11");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User12");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("12");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User13");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("13");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User14");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("14");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User15");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("15");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User16");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("16");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User17");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("17");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User18");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("18");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User19");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("19");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User20");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("20");

    cy.get("#adminui-user-save").click();
  });
  it.only(`TEST 4-Create 20 accounts`, () => {
    cy.contains("System Administration").click();
    cy.contains("button", "Add New Account").click();
    cy.wait(500);
    cy.get("#personGender").type("F");
    cy.get("#userName").type("User21");
    cy.get("#password").type("Admin123");

    cy.get("#adminui-loc-e1dc3d15-7f7f-4421-88d7-8d7b6924da4b").click();

    cy.get('input[placeholder="select provider role"]')
      .type("Doctor")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Nurse")
      .type("{enter}");
    cy.get('input[placeholder="select provider role"]')
      .type("Registration Clerk")
      .type("{enter}");

    cy.get("#personGivenName").type("User");

    cy.get("#personFamilyName").type("21");

    cy.get("#adminui-user-save").click();
  });
});
