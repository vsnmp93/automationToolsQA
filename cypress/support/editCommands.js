import "cypress-file-upload";
require("@4tw/cypress-drag-drop");

Cypress.Commands.add("GoWebtables", () => {
  cy.visit("/");
  cy.fixture("DOMEdit/editLocator").then((the) => {
    cy.get(the.typeBtnElement).click({ force: true });
    cy.get(the.typeBtnWebTables).click({ force: true });
  });
  cy.url().should("contain", "webtables");
});

Cypress.Commands.add("EditRegistro", () => {
  cy.fixture("DOMEdit/editLocator").then((the) => {
    cy.get(the.editBtn).click({ force: true });
    cy.get(the.editFirstName.input).clear().type(the.editFirstName.data.valid);
    cy.get(the.editLastName.input).clear().type(the.editLastName.data.valid);
    cy.get(the.editUserEmail.input).clear().type(the.editUserEmail.data.valid);
    cy.get(the.editAge.input).clear().type(the.editAge.data.valid);
    cy.get(the.editSalary.input).clear().type(the.editSalary.data.valid);
    cy.get(the.editDepartment.input)
      .clear()
      .type(the.editDepartment.data.valid);
    cy.get(the.submitForm).click({ force: true });
  });
});
