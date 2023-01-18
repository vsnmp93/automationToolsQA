import "cypress-file-upload";
require("@4tw/cypress-drag-drop");

Cypress.Commands.add("GoWebTables", () => {
  cy.visit("/");
  cy.fixture("DOMAdd/addlocator").then((the) => {
    cy.get(the.typeBtnElement).click({ force: true });
    cy.get(the.typeBtnWebTables).click({ force: true });
  });
  cy.url().should("contain", "webtables");
});

Cypress.Commands.add("AddRegistro", () => {
  cy.fixture("DOMAdd/addlocator").then((the) => {
    cy.get(the.addBtn).click({ force: true });
    cy.get(the.addFirstName.input).type(the.addFirstName.data.valid);
    cy.get(the.addLastName.input).type(the.addLastName.data.valid);
    cy.get(the.addUserEmail.input).type(the.addUserEmail.data.valid);
    cy.get(the.addAge.input).type(the.addAge.data.valid);
    cy.get(the.addSalary.input).type(the.addSalary.data.valid);
    cy.get(the.addDepartment.input).type(the.addDepartment.data.valid);
    cy.get(the.submitForm).click({ force: true });
  });
});
