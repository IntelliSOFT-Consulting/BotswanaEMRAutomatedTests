// shared.js
import { faker } from "@faker-js/faker";

let firstName = '';
let familyName = '';

const setPatientNames = () => {
  firstName = faker.name.firstName(); // Generates a random first name
  familyName = faker.name.lastName();  // Generates a random last name
};

const getPatientNames = () => {
  return { firstName, familyName };
};

export { setPatientNames, getPatientNames };
