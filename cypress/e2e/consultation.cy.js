/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

import { firstname, familyname } from "./screening.cy";

describe("Consultation page", () => {
  it("Visits the homepage", () => {
    cy.visit("https://botswanaemrdemo.intellisoftkenya.com/openmrs/login.htm");
  });
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit("https://botswanaemrdemo.intellisoftkenya.com/openmrs/login.htm");
      cy.get("#username").type("admin");
      cy.get("#password").type("Y3z44AH2");
      cy.contains("button", "Sign in").click();
      cy.get("#loggedInLocationId").select("Sebele Clinic");
      cy.get("#sessionLocationId").select("Registration Desk");
      cy.contains("button", "Check in").click();
    });
  });


  // afterEach(() => {
  //     // cy.eyesClose();
  // });



  it(`TEST 1-Access Consultation portal`, () => {
    cy.visit("https://botswanaemrdemo.intellisoftkenya.com/openmrs/login.htm");
    // cy.get("#username").type("admin");
    // cy.get("#password").type("Y3z44AH2");
    // cy.contains("button", "Sign in").click();
    cy.get("#loggedInLocationId").select("Sebele Clinic");
    cy.get("#sessionLocationId").select("Registration Desk");
    cy.contains("button", "Check in").click();

    cy.get('#selected-location').click();
    cy.contains('Consultation').click()
    // cy.url().should("contain", "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/consultation/doctorsPatientPoolDashboard.page?appId=botswanaemr.auxilliaryNurseDashboard");

    //cy.get('[data-dt-idx="3"]').click();


    cy.contains('td', familyname + ' ' + firstname)  // gives you the cell 
      .siblings()                            // gives you all the other cells in the row
      .contains('a', 'Treat')               // finds the delete button
      .click()

    cy.get('body').then(($body) => {
      if ($body.find('#continueConsultation').length > 0) {
        cy.get('#continueConsultation').click();
      }
    });


    cy.get('#beginConsulations').click();

    cy.get('#complete').click();

    //! SUBJECTIVE TAB

    // Symptoms
    cy.get(':nth-child(1) > :nth-child(1) > .col-12 > .info-section > .col > #btnPhysicalExam').click();
    cy.get('#complaint').type("Sample complaint");
    cy.get('#addComplaintsForm > .modal-footer > .btn-primary').click();
    cy.get(':nth-child(2) > :nth-child(1) > .col-12 > .info-section > .col > #btnPhysicalExam').click();
    cy.get('#btnAddSymptom').click();
    cy.get('#newSymptom > :nth-child(1) > .form-control').type('Fever');

    cy.get('#newSymptom > :nth-child(2) > input').type('Sharp headache');
    cy.get('#newSymptom > :nth-child(3) > input').type('2');
    cy.get('#newSymptom > :nth-child(4) > .form-control').select('Days');
    cy.get('#saveSymptoms').click();

    // cy.contains('MG26 - Fever of other or unknown origin').should('be.visible', {force: true}); // Check if the added symptom is visible

    cy.wait(5000)
    // Conditions
    cy.get(':nth-child(2) > :nth-child(2) > .col-12 > .info-section > .info-header > .row > .col-1 > .btn').click();
    cy.get('#btnAddCondition').click();
    cy.get('.newCondition > :nth-child(1) > .form-control').type('Malaria').wait(2000).type('{downarrow}').click();
    cy.get('.newCondition > :nth-child(2) > input').type('Slight symptoms of amoeba');
    cy.get('#editConditions > .button-section-right > .btn-primary').click();

    // cy.contains('1F45 - Malaria without parasitological confirmation').should('be.visible', {force: true}); // Check if the added condition is visible

    cy.wait(5000)
    //Allergies
    cy.get(':nth-child(3) > :nth-child(2) > .col-12 > .info-section > .info-header > .row > .col-1 > .btn').click();
    cy.get('#btnAddAllergy').click();
    cy.get('#newAllergy > :nth-child(1) > .ui-autocomplete-input').type('Penicillin').wait(2000).type('{downarrow}').click();
    cy.get('#newAllergy > :nth-child(2) > input').type('Sometimes allergic to peanuts');
    cy.get('#editAllergies > .button-section-right > .btn-primary').click();

    // cy.contains('Penicillins').should('be.visible', {force: true}); // Check if the added allergy is visible

    cy.wait(5000)
    // Past Operations
    cy.get(':nth-child(4) > :nth-child(2) > .col-12 > .info-section > .info-header > .row > .col-1 > .btn').click();
    cy.get('#btnAddPastOperation').click();
    cy.get('#newPastOperation > :nth-child(1) > .form-control').type('Application').wait(2000).type('{downarrow}').click();
    cy.get('#newPastOperation > :nth-child(2) > input').type('2006');
    cy.get('#newPastOperation > :nth-child(3) > input').type('double fracture');
    cy.get('#editPastOperations > .button-section-right > .btn-primary').click();

    // cy.contains('Application of Plaster of Paris (POP)').should('be.visible', {force: true}); // Check if the added past operation is visible

    cy.wait(5000)
    // Lifestyle Habits
    cy.get(':nth-child(5) > :nth-child(2) > .col-12 > .info-section > .info-header > .row > .col-1 > .btn').click();
    cy.get('#btnAddLifestyle').click()
    cy.get('#newLifestyle > :nth-child(1) > input').type('chain smoking ');
    cy.get('#newLifestyle > :nth-child(2) > input').type('Ready to quit');
    cy.get('#editLifestyles > .button-section-right > .btn-primary').click();

    // cy.contains('chain smoking').should('be.visible', {force: true}); // Check if the added lifestyle habit is visible

    cy.wait(5000)
    // Patient's current diet
    cy.get(':nth-child(6) > :nth-child(2) > .col-12 > .info-section > .info-header > .row > .col-1 > .btn').click();
    cy.get('#btnAddDiet').click();
    cy.get('#newDiet > :nth-child(1) > input').type('High protein diet');
    cy.get('#newDiet > :nth-child(2) > input').type('3 times a day');
    cy.get('#newDiet > :nth-child(3) > input').type('Patient prefers food high in protein');
    cy.get('#editDiets > .button-section-right > .btn-primary').click();

    // cy.contains('High protein diet').should('be.visible', {force: true}); // Check if the added diet is visible


    //! OBJECTIVE TAB

    cy.get('#objective-tab').click();





    cy.get('#assessment-tab').click();
    cy.contains('+ Add diagnosis').click()

    cy.get('#btnAddDiagnosis').click();

    cy.get('#newDiagnosis > :nth-child(1) > .form-control').type('Malaria');
    cy.get('#newDiagnosis > :nth-child(2) > .custom-select').select('Confirmed');
    cy.get('#newDiagnosis > :nth-child(3) > #diagnosisTypetype').select('New');
    cy.get('#editDiagnoses > .button-section-right > .btn-primary').click({ multiple: true });

    // cy.lighthouse();



  })

})