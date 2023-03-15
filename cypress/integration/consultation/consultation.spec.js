/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

import { firstname, familyname } from "../screening/screening.spec";

describe("Consultation page", () => {
    beforeEach(() => {
        cy.locations("admin", "Y3z44AH2");

        cy.eyesOpen({
            appName: "Location Page",
            testName:
                "Verify that all the labels and controls including text-boxes, buttons, and links are present on the Login page and can be interacted with",
        });

    });

    afterEach(() => {
        cy.eyesClose();
    });



    it(`TEST 1-Access Consultation portal`, () => {

        cy.get('#selected-location').click();
        cy.contains('Consultation').click()
        cy.url().should("contain", "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/consultation/doctorsPatientPoolDashboard.page?appId=botswanaemr.auxilliaryNurseDashboard");

        // cy.lighthouse();
        // cy.get('[data-dt-idx="3"]').click(); // In case the list exceeds the page


        cy.contains('td', familyname + ' ' + firstname)  // gives you the cell 
            .siblings()                            // gives you all the other cells in the row
            .contains('a', 'Treat')               // finds the delete button
            .click()

        cy.get('#beginConsulations').click();

        cy.wait(2000);
        cy.get('#description').type('This is a test');
        cy.get('#complete').click();

        //! SUBJECTIVE TAB

        // Symptoms
        cy.get(':nth-child(1) > :nth-child(2) > .col-12 > .info-section > .info-header > .row > .col-1 > .btn').click();
        cy.get('#btnAddSymptom').click();
        cy.get('#newSymptom > :nth-child(1) > .form-control').type('Fever').wait(2000).type('{downarrow}').click();
        cy.get('#newSymptom > :nth-child(2) > input').type('Sharp headache');
        cy.get('#newSymptom > :nth-child(3) > input').type('2');
        cy.get('#newSymptom > :nth-child(4) > .form-control').select('Days');
        cy.get('#editSymptoms > .button-section-right > .btn-primary').click();

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

        cy.wait(3000)

        //! OBJECTIVE TAB

        cy.get('#objective-tab').click();

        //Vitals

        cy.wait(3000)
        // Physical Exam

        cy.get('#btnPhysicalExam').scrollIntoView({ easing: 'linear' })
        cy.get('#btnPhysicalExam').click();
        cy.get('#physical-exam').type('Patient is in good health');
        cy.get('#btnAddPhysicalExam').click();

        cy.wait(5000)
        //Lab Order
        // cy.get('#btnTest').scrollIntoView()
        cy.get('#btnTest').click();
        cy.get('#labOrder').type('Blood').wait(2000).type('{downarrow}').click();;
        cy.get('#addLabOrderBtn').click();

        cy.wait(10000)
        //Additional notes
        cy.get('#btnAdditionalNotes').scrollIntoView()
        cy.get('#btnAdditionalNotes').click();
        cy.get('#additionalNotes').type('Patient is in good health');
        cy.get('#additionalNotesForm > .modal-footer > .btn-primary').click();






        //! ASSESSMENT TAB

        cy.get('#assessment-tab').click();

        //Nursing Diagnosis
        cy.get('#btnNursingDiagnosis').click();
        cy.wait(2000)
        cy.get('#nursingDiagnosis').type('Malaria');
        cy.wait(2000)
        cy.get('#nursingDiagnosisForm > .modal-footer > .btn-primary').click();

        //Diagnosis
        cy.get('#assessment-tab').click();
        cy.get(':nth-child(4) > .dashed-button').click();
        cy.get('#btnAddDiagnosis').click();
        cy.get('#newDiagnosis > :nth-child(1) > .form-control').type('Malaria').wait(2000).type('{downarrow}').click();
        cy.get('#newDiagnosis > :nth-child(2) > .custom-select').select('Confirmed');
        cy.get('#newDiagnosis > :nth-child(3) > #diagnosisTypetype').select('New');
        cy.get('#editDiagnoses > .button-section-right > .btn-primary').click();

        //Additional notes
        cy.get('#assessment-tab').click();
        cy.get('#btnAssessmentAdditionalNotes').click();
        cy.get('#assessmentAdditionalNotes').type('Patient is in good health');
        cy.get('#assessmentAdditionalNotesForm > .modal-footer > .btn-primary').click();


        cy.get('#btnAddDiagnosis').click();

        cy.get('#newDiagnosis > :nth-child(1) > .form-control').type('Malaria');
        cy.get('#newDiagnosis > :nth-child(2) > .custom-select').select('Confirmed');
        cy.get('#newDiagnosis > :nth-child(3) > #diagnosisTypetype').select('New');
        cy.get('#editDiagnoses > .button-section-right > .btn-primary').click({ multiple: true });

        // cy.lighthouse();



    })

})