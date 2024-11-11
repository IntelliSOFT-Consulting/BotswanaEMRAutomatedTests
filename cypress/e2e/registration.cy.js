/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

var moment = require("moment");
import { faker } from "@faker-js/faker";

const firstName = faker.name.firstName();
const familyName = faker.name.lastName();

describe("Registration page", () => {
  it("TEST 1- Visits the homepage", () => {
    cy.visit("https://botswanaemrdemo.intellisoftkenya.com/openmrs/login.htm");
  });

  //********tests-cases*********

  it("TEST 2- Login and Register a routine patient", () => {
    cy.visit("http://botswanaemrdemo.intellisoftkenya.com/openmrs/login.htm");
    cy.get("#username").type("admin");
    cy.wait(1000);
    cy.get("#password").type("Y3z44AH2");

    cy.contains("button", "Sign in").click();

    cy.get("#loggedInLocationId").select("Sebele Clinic");
    cy.get("#sessionLocationId").select("Registration Desk");

    cy.contains("button", "Check in").click();

    cy.contains("button", "Register New Patient").click();

    // Fill in registration form
    cy.get('#regularCheck').click();
    cy.get('#next').click();

    cy.get("#find-patients")
      .type(firstName)
      .should("have.value", firstName);
    cy.get('.input-group-append > .btn > .fa').click();
    cy.get('.badge').then(($badge) => {
      if ($badge.length > 0) {
        cy.wrap($badge[$badge.length - 1]).click(); // Select the last element
      } else {
        cy.get(':nth-child(2) > .badge').click();
      }
    });

    cy.get("#citizen").click();
    cy.get("#btnId").click();

    // Define the function to generate a 9-digit ID
    function generatePatientId() {
      // Generate first 4 digits (0-9)
      const firstPart = Cypress._.random(1000, 9999).toString(); // 4 random digits

      // Generate 5th digit (1 or 2)
      const fifthDigit = Cypress._.random(1, 2).toString(); // Either 1 or 2

      // Generate last 4 digits (0-9)
      const lastPart = Cypress._.random(1000, 9999).toString(); // 4 random digits

      return `${firstPart}${fifthDigit}${lastPart}`; // Combine all parts into a 9-digit number
    }

    const patientId = generatePatientId(); // Generate the 9-digit patient ID
    cy.get("#patientId").type(patientId); // Use the generated ID in the input field

    cy.wait(2000);
    // Check if the #givenName field is empty, and only type if it is
    cy.get('#givenName').invoke('val').then(value => {
      if (!value) { // if the field is empty
        cy.get('#givenName').type(firstName);
      }
    });
    cy.get("#familyName").type(familyName);
    cy.wait(2000);

    // Function to generate random age, months, and weeks
    function generateRandomAge() {
      return Math.floor(Math.random() * 70) + 1; // Random number between 1 and 70
    }

    const randomAge = generateRandomAge();
    const randomMonths = Math.floor(Math.random() * 12); // 0-11
    const randomWeeks = Math.floor(Math.random() * 4); // 0-3

    cy.get('#age').type(randomAge);
    cy.get('#ageMonth').type(randomMonths);
    cy.get('#ageWeeks').type(randomWeeks);

    cy.get("#maritalStatus").select("Single", { force: true });
    cy.get("#email").type(firstName + familyName + "@gmail.com");
    cy.get("#phoneNumber").type("7" + Cypress._.random(10000000, 99999999));
    cy.get("#education").select("Primary education");
    cy.get("#address2").select("Ghanzi District");
    cy.get("#cityVillage").type("Ghanzi").wait(2000).type("{downarrow}").click();
    cy.get("#address4").type("Ghanzi tower");

    cy.get("#btnNext").click();

    // Next Of KIN
    const checkboxes = ['#nextOfKinType', '#contactPersonType', '#contactPersonType'];
    const randomIndex = Math.floor(Math.random() * checkboxes.length);
    cy.get(checkboxes[randomIndex]).scrollIntoView().click();

    // Define the generateRandomId function
    function generateRandomId() {
      // Generate first 4 digits (0-9)
      const firstPart = Cypress._.random(1000, 9999).toString(); // First 4 digits

      // Generate 5th digit (1 or 2)
      const fifthDigit = Cypress._.random(1, 2).toString(); // 1 or 2

      // Generate last 4 digits (0-9)
      const lastPart = Cypress._.random(1000, 9999).toString(); // Last 4 digits

      return `${firstPart}${fifthDigit}${lastPart}`; // Combine all parts
    }

    const randomIdNumber = generateRandomId();
    cy.get('#nokIdNumber').type(randomIdNumber);

    cy.wait(2000)

    cy.get('#nokFullName').type(familyName + " Doe", { force: true });

    cy.wait(1000)

    // Randomly select a relationship
    cy.get('#nokRelationship').then(($dropdown) => {
      const options = $dropdown.find('option');
      const randomIndex = Math.floor(Math.random() * options.length);
      cy.wrap($dropdown).select(options[randomIndex].value);
    });

    cy.wait(1000)

    // Define the generateRandomPhoneNumber function
    function generateRandomPhoneNumber() {
      return "7" + Cypress._.random(10000000, 99999999); // Example phone number generator
    }

    const randomPhoneNumber = generateRandomPhoneNumber();
    cy.get('#nokContact').type(randomPhoneNumber);

    cy.wait(1000)

    cy.get('#btnAddress').click();
    cy.get('#btnNext').click();

    // // Store entered values for confirmation
    // const enteredValues = {
    //   firstName,
    //   familyName,
    //   patientId: patientId,
    //   age: randomAge,
    //   ageMonth: randomMonths,
    //   ageWeeks: randomWeeks,
    //   maritalStatus: "Single",
    //   email: firstName + familyName + "@gmail.com",
    //   phoneNumber: "7" + Cypress._.random(10000000, 99999999),
    //   education: "Primary education",
    //   address2: "Ghanzi District",
    //   cityVillage: "Ghanzi",
    //   address4: "Ghanzi tower",
    //   nokIdNumber: randomIdNumber,
    //   nokFullName: familyName + " Doe",
    //   //  nokRelationship: options[randomIndex].text, // assuming this captures the selected option
    //   nokContact: randomPhoneNumber
    // };

    // // Verify that the values are displayed on the page
    // const valuesToCheck = [
    //   enteredValues.firstName,
    //   enteredValues.familyName,
    //   enteredValues.patientId,
    //   enteredValues.age,
    //   enteredValues.ageMonth,
    //   enteredValues.ageWeeks,
    //   enteredValues.maritalStatus,
    //   enteredValues.email,
    //   enteredValues.phoneNumber,
    //   enteredValues.education,
    //   enteredValues.address2,
    //   enteredValues.cityVillage,
    //   enteredValues.address4,
    //   enteredValues.nokIdNumber,
    //   enteredValues.nokFullName,
    //   enteredValues.nokRelationship,
    //   enteredValues.nokContact
    // ];

    // valuesToCheck.forEach((value) => {
    //   cy.contains(value).scrollIntoView().should('be.visible');
    // });


    cy.wait(3000);

    cy.get('#btnNext').click()

    cy.wait(1000)

    // Check if the #delayPayment element is available and interact with it if it exists
    cy.get('body').then($body => {
      if ($body.find('#delayPayment').length) {
        cy.get('#delayPayment').click();
      }
    });

    // Check if the #btnCapturePayment element is available and interact with it if it exists
    cy.get('body').then($body => {
      if ($body.find('#btnCapturePayment').length) {
        cy.get('#btnCapturePayment').click();
      }
    });


    cy.get('#queueRoom').select('Screening');
    cy.get('#queuePatient').click();

    // Assuming registration process is already done and we are back at the dashboard

    // Wait for the dashboard to load
    cy.wait(1000);

    // Construct the full name in the format "familyName firstName"
    const fullName = `${familyName} ${firstName}`;

    // Check if the newly registered patient's name is listed on the dashboard
    cy.contains(fullName).should('exist');

  });

  it("TEST 3- Login and Register aN Emergency patient", () => {

    cy.visit("http://botswanaemrdemo.intellisoftkenya.com/openmrs/login.htm");
    cy.get("#username").type("admin");
    cy.wait(1000);
    cy.get("#password").type("Y3z44AH2");

    cy.contains("button", "Sign in").click();

    cy.get("#loggedInLocationId").select("Sebele Clinic");
    cy.get("#sessionLocationId").select("Registration Desk");

    cy.contains("button", "Check in").click();

    cy.contains("button", "Register New Patient").click();

    cy.get('#emergencyCheck').click();
    cy.get('#next').click();


    cy.get('#noIdentification').click();

    cy.wait(2000);

    // Step 1: Generate and capture a random name for the emergency patient registration
    const names = ["Blue Pants", "Head Injury", "No Name", "Unknown patient"];  // List of generic names
    const randomName = names[Math.floor(Math.random() * names.length)];  // Randomly select a name

    // Fill in the registration form with the randomly selected name
    cy.get('#name').type(randomName);  // Assuming #name is the field for the patient's name



    const options = ['#adult', '#child'];

    const randomOption = options[Math.floor(Math.random() * options.length)];

    cy.get(randomOption).click();


    // Step 1: Get the dropdown field
    cy.get('#emergencyGender')
      // Step 2: Find all available options within the dropdown
      .find('option')
      // Step 3: Get all options, and randomly select one
      .then($options => {
        const randomIndex = Math.floor(Math.random() * $options.length);
        const randomValue = $options[randomIndex].value;

        // Step 4: Select the random option by its value
        cy.get('#emergencyGender').select(randomValue);
      });


    cy.get('#next').click();

    cy.wait(1000);
    cy.get("#queueRoom").select("Screening");

    cy.contains("button", "Assign Patient").click();


    // Wait for the dashboard to load
    cy.wait(1000);

    cy.get('#searchPhrase').type(randomName);  // Type the captured name in the search field

    // Step 3: Click the search button
    cy.get('#inquireBtn').click();

    // Step 4: Verify if the name appears in the results
    cy.get('body').then(($body) => {
      if ($body.find('.resultRow').length > 0) {
        // Step 5: Scroll through results and check if the patient appears
        cy.get('.resultRow').each(($el) => {
          cy.wrap($el).scrollIntoView();  // Scroll each result into view
          cy.wrap($el).should('contain.text', randomName);  // Confirm if the patient name appears
        });
      } else {
        console.log('No search results found');
      }
    });


  });

});

export { firstName, familyName };
