/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />


var moment = require('moment');

import { faker } from '@faker-js/faker';

const firstName = faker.name.firstName();
const familyName = faker.name.lastName();
// const mobileNumber = faker.phone.phoneNumber('966#######');

describe("Registration page", () => {
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

  //********tests-cases*********

  it.skip("TEST 1-Should actually be accessible", () => {
    cy.visit(
      "http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs/botswanaemr/registrationAdminDashboard.page?appId=botswanaemr.registrationAdminDashboard"
    );
  });

  it.skip(`TEST 2-Verifying visibility of the page objects`, () => {
    //applitools eyes test
    cy.eyesCheckWindow({
      tag: "TP01-Verifying visibility of the elements on the page",
      target: "window",
      fully: true,
    });
  });

  it(`TEST 3-Verifying successful registration of emergency patients`, () => {
    cy.contains("button", "Register New Patient").click();

    cy.get('#find-patients').type("Jane Doe{enter}").should("have.value", "Jane Doe");
    // cy.get('.fa-search').click()

    cy.contains('Create New Record >>').click();

    cy.get("#emergencyCheck").click();

    cy.contains("button", "Next Step").click();

    cy.get("#name").type("John Juma").should("have.value", "John Juma");

    cy.contains("button", "Complete").click();

    cy.wait(1000);
    cy.get("#queueRoom")
      .select("Screening")

    cy.contains("button", "Assign Patient").click();

    cy.wait(2000);

    // cy.contains('Juma John').should('be.visible')
  });

  it.skip(`TEST 4-Verifying successful registration of regular patients`, () => {
    cy.contains("button", "Register New Patient").click();

    cy.get('#find-patients').type("Jane Doe{enter}").should("have.value", "Jane Doe");
    // cy.get('.fa-search').click()

    cy.contains('Create New Record >>').click();

    cy.get('#regularCheck').click();

    cy.contains("button", "Next Step").click();

    cy.get('#citizen').click();
    cy.get('#btnId').click();

    const uuid = () => Cypress._.random(0, 1e4)
    const uuid2 = () => Cypress._.random(0, 1e5)

    const id = uuid()
    const id2 = uuid2()
    const testname = `${id}1${id2}`
    cy.wait(2000);
    cy.get('#patientId').type(testname);

    cy.wait(10000);
    cy.get('#givenName').type(firstName);
    cy.wait(2000);
    cy.get('#familyName').type(familyName);

    // cy.get('#dateOfBirth')click();
    //a simple date formatting function
    function dateFormat(inputDate, format) {
      //parse the input date
      const date = new Date(inputDate);

      //extract the parts of the date
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      //replace the month
      format = format.replace("MM", month.toString().padStart(2, "0"));

      //replace the year
      if (format.indexOf("yyyy") > -1) {
        format = format.replace("yyyy", year.toString());
      } else if (format.indexOf("yy") > -1) {
        format = format.replace("yy", year.toString().substr(2, 2));
      }

      //replace the day
      format = format.replace("dd", day.toString().padStart(2, "0"));

      return format;
    }


    function getRandomDate() {
      const maxDate = Date.now();
      const timestamp = Math.floor(Math.random() * maxDate);
      // return new Date(timestamp).toLocaleDateString('en-GB', { month: 'short', day: '2-digit', year: 'numeric'});
      return new Date(timestamp).toLocaleDateString('en-GB', { year: 'numeric', month: '2-digit', day: '2-digit' });

    }
    let date1 = getRandomDate();

    //   let date2 = moment(date1).format('YYYY-MM-DD');

    // let date2 = dateFormat(getRandomDate(), 'yyyy-MM-dd');
    let date2 = "1990-01-01"

    // console.log(date2);
    
    cy.wait(2000);
    cy.get('#dateOfBirth').type(date2);

    cy.get('#age').click();


    cy.get('#maritalStatus').then(($maritalStatus) => {
      if ($maritalStatus.is('disabled')) {
        this.skip()
      } else {
        cy.get('#maritalStatus').select('Single');
      }
    })


    cy.get('#maritalStatus').select('Single');
    cy.get('#email').type(firstName + familyName + '@gmail.com');
    cy.get('#phoneNumber').type('7' + Cypress._.random(10000000, 99999999));
    cy.get('#education').select('Primary education');
    cy.get('#address2').select('Ghanzi District');
    cy.get('#cityVillage').type('Ghanzi').wait(2000).type('{downarrow}').click();
    cy.get('#address4').type('Ghanzi tower');
    cy.get('#btnNext').click();



    //Next Of KIN

    const uuid3 = () => Cypress._.random(0, 1e4)
    const uuid4 = () => Cypress._.random(0, 1e5)

    const id3 = uuid3()
    const id4 = uuid4()
    const testname2 = `${id3}1${id4}`
    cy.wait(2000);
    cy.get('#nokIdNumber').type(testname2);

    cy.wait(10000)

    cy.get('#nokFullName').type(familyName + ' ' + 'Doe');
    cy.get('#nokRelationship').select('Father');
    cy.get('#nokContact').type('7' + Cypress._.random(10000000, 99999999));
    cy.get('#btnAddress').click();

    cy.get('#btnNext').click();

    cy.get('#btnNext').click();

    cy.wait(4000);

    cy.get('#amount').type('5');
    cy.get('#paymentMade').click();

    cy.get('#paymentMethod').select('Cash');

    cy.get('#btnCapturePayment').click();


    cy.get('#queueRoom').select('Screening');

    cy.get('#queuePatient').click();

    // cy.contains(familyName + '  ' + firstName).should('be.visible')


    // cy.get("#name").type("John Juma").should("have.value", "John Juma");

    // cy.contains("button", "Complete").click();

    // cy.wait(1000);
    // cy.get("#queueRoom")
    //   .select("Screening")

    // cy.contains("button", "Assign Patient").click();

    // cy.wait(2000);

    // cy.contains('Juma John').should('be.visible')
  });


});

export {firstName, familyName};