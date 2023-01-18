import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "El usuario se dirige hacia el mantenedor de WebTables para editar un registro",
  () => {
    cy.GoWebTables();
  }
);

When(
  "El usuario hace click en edit e ingresa los datos válidos y hace click en submit",
  () => {
    cy.EditRegistro();
  }
);
Then("El usuario visualiza el registro modificado", () => {
  cy.url().should("contains", "/webtables");
});
