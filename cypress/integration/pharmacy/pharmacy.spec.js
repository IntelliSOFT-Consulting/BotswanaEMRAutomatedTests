/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

import { firstName, familyName } from "../registration/regular-registration.spec"

const firstname = firstName;
const familyname = familyName;


describe("User account page", () => {
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

    it(`TEST 1-Access user account page`, () => {

        cy.get('#selected-location').click();
        cy.get('#sidebarCollapse > .fa').click();
        cy.get('[locationid="9"]').click()

        cy.wait(4000);


        cy.contains('td', familyname + ' ' + firstname)  // gives you the cell 
            .siblings()                            // gives you all the other cells in the row
            .contains('a', 'Reassign')               // finds the action link
            .click()
        cy.get('#queueRoomUuid').select('Pharmacy');
        cy.get('#reassignPatient').click();

        cy.wait(10000);

        cy.get('#selected-location').click();
        cy.get('[locationid="2"]').click()

        cy.wait(5000);

        // cy.get('#sidebarCollapse > .fa').click();
        cy.wait(2000)
        cy.get('#sidebarCollapse > .fa').click();

        cy.get(':nth-child(5) > .nav_link > .nav_label').click();
        cy.contains('td', familyname + ' ' + firstname)  // gives you the cell 
            .siblings()                            // gives you all the other cells in the row
            .contains('a', 'Add prescription')               // finds the action link
            .click()

        cy.wait(2000);

        cy.get('#drug').type('codeine').wait(2000).type('{downarrow}').click();
        cy.get('#route').select('Oral');
        cy.get('#dosage').type('50');
        cy.get('#refillRepeat').type('2');
        cy.get('#frequency').select('Every three hours');
        cy.get('#fromDate').type('2023-03-13');
        cy.wait(2000);
        cy.get('#toDate').type('2023-04-13');

        cy.get('#btnAddToBasket').click();

        cy.get('#btn-save-orders').click({force:true});

        cy.get(':nth-child(5) > .nav_link > .nav_label').click();
        cy.get(':nth-child(1) > :nth-child(6) > #view').click();

        cy.get('.row > .col > .btn').click();
        cy.get('#stockRoomId').select('Pharmacy');



    });


})