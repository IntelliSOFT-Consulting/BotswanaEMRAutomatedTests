/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

import { firstName, familyName } from './registration.cy.js';

const firstname = firstName;
const familyname = familyName;

describe("Screening page", () => {

  // Use cy.session to persist login session
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

  it("Visits the homepage", () => {
    cy.visit("https://botswanaemrdemo.intellisoftkenya.com/openmrs/login.htm");
  });

  it(`TEST 1-Access screening module`, () => {
    // Navigating to the screening module after session is established
    cy.visit("https://botswanaemrdemo.intellisoftkenya.com/openmrs/botswanaemr/registrationAdminDashboard.page?appId=botswanaemr.registrationAdminDashboard")
    // cy.get('#selected-location').click();
    // cy.get('[locationid="9"]').click();

    cy.get('[data-dt-idx="3"]').click();
    cy.wait(2000);

    // Selecting the registered patient and starting screening
    cy.contains('td', familyname + ' ' + firstname)
      .siblings()
      .contains('a', 'Screen')
      .click();

    // Interacting with screening page elements
    cy.get('#w8').select('Yes');
    cy.get('#w10').select('Yes');
    cy.get('#w12').select('Yes');
    cy.get('#w14').select('Yes');
    cy.get('#submit').click();

    cy.get('#pills-screening-process-tab').click();
    cy.get('#w6').type('38');
    cy.get('#w8').type('120', { force: true });
    cy.get('#w10').type('80');
    cy.wait(1000);
    cy.get('#w12').type('75');
    cy.wait(1000);
    cy.get('#w14').type('175{enter}');
    cy.wait(2000);
    cy.get('#w16').click(); //BMI
    cy.get('#w18').click(); //BSA(m2)
    cy.get('#w20').type('10'); //Respiratory rate (b/m)
    cy.get('#w22').type('71'); //Pulse (b/m)
    cy.get('#w24').type('12'); //Head Circumference (cm)
    cy.get('#w26').type('12'); //RBS (mmol/L)
    cy.get('#w28').type('100'); //Oxygen Saturation (Sp02)

    cy.get('#w30_0').click(); //Conscious
    cy.get('#w32_0').click();
    cy.get('#w34').select('Mild');
    cy.get('#w36_1').click();
    cy.get('#nextBtn').click();

    // Continuing the screening process
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

    // Finalizing screening and assigning the patient
    cy.wait(5000);
    cy.get('#queueRoom').select("Consultation");
    cy.wait(2000);
    cy.get('#confirmAssignment').click({ force: true });
  });
});

export { firstname, familyname };
