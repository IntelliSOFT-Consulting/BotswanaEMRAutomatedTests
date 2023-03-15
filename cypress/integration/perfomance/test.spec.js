/// <reference types="@cypress-audit/lighthouse" />

it('loads fast enough', () => {
    cy.visit('http://botswanaemrdemo.intellisoftkenya.com:9901/openmrs')
    cy.lighthouse()
  })