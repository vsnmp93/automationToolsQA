import "cypress-file-upload";
require("@4tw/cypress-drag-drop");

Cypress.Commands.add("GoWebtables", () => {
  cy.visit("/");
  cy.fixture("DOMDelete/deleteLocator").then((the) => {
    cy.get(the.typeBtnElement).click({ force: true });
    cy.get(the.typeBtnWebTables).click({ force: true });
  });
  cy.url().should("contain", "webtables");
});

Cypress.Commands.add("DeleteRegistro", () => {
  cy.fixture("DOMDelete/deleteLocator").then((the) => {
    cy.get(the.deleteBtn).click({ force: true });
  });
});
