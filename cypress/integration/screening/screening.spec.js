/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

import { firstName, familyName } from '../registration/registration.spec.js';

const firstname = firstName;
const familyname = familyName;


describe("Screening page", () => {
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




    it(`TEST 1-Access screening module`, () => {

        cy.get('#selected-location').click();
        cy.get('#sidebarCollapse > .fa').click();
        cy.get('[locationid="9"]').click({force: true})
        cy.url().should("contain", "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/consultation/auxilliaryNurseDashboard.page?appId=botswanaemr.auxilliaryNurseDashboard");


        // cy.get('[data-dt-idx="3"]').click(); // In case the list exceeds the page

        cy.wait(2000);

        cy.contains('td', familyname + ' ' + firstname)  // gives you the cell 
            .siblings()                            // gives you all the other cells in the row
            .contains('a', 'Screen')               // finds the delete button
            .click()

        cy.get('#w8').select('Yes');
        cy.get('#w10').select('Yes');
        cy.get('#w12').select('Yes');
        cy.get('#w14').select('Yes');

        cy.get('#submit').click();

        cy.get('#pills-screening-process-tab').click();
        cy.get('#w6').type('38');
        cy.get('#w8').type('120', {force: true});
        cy.get('#w10').type('80');
        cy.wait(1000);
        cy.get('#w12').type('75');
        cy.wait(1000);
        cy.get('#w14').type('175{enter}');
        cy.wait(2000);
        cy.get('#w16').click() //BMI
        cy.get('#w18').click() //BSA(m2)

        // cy.get('#w16').should("contain", "24.5");
        // cy.get('#w18').should("contain", "1.91");
        cy.get('#w20').type('10'); //Respiratory rate (b/m)
        cy.get('#w22').type('71'); //Pulse (b/m)
        cy.get('#w24').type('12'); //Head Circumference (cm)
        cy.get('#w26').type('12'); //RBS ( mmol/L)
        cy.get('#w28').type('100'); //Oxygen Saturation (Sp02) 

        cy.get('#w30_0').click(); //Concious
        cy.get('#w32_0').click();

        cy.get('#w34').select('Mild');

        cy.get('#w36_1').click();


        cy.get('#nextBtn').click();

        cy.get('#w98_1').click();
        cy.get('#w124_1').click();
        cy.get('#w150_1').click();
        cy.get('#w188_1').click();
        cy.get('#w226_1').click();

        cy.get('#nextBtn').click();


        cy.get('#w288').type("Headache");
        cy.wait(4000);
        cy.get('#w288').type('{downarrow}').click();

        cy.get('#w290').type("The headache is mild and not severe");
        cy.get('#nextBtn').click();

        cy.get('#nextBtn').click();

        cy.wait(5000);
        cy.get('#queueRoom').select("Consultation")

        // cy.contains("button", "Assign Patient").click();

        cy.wait(2000);

        cy.get('#confirmAssignment').click({ force: true });


    });




});

export { firstname, familyname };