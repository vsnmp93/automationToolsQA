import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("El usuario se dirige hacia el mantenedor de WebTables", () => {
  cy.GoWebTables();
});

When(
  "El usuario hace click en add e ingresa los datos válidos y hace click en submit",
  () => {
    cy.AddRegistro();
  }
);
Then("El usuario visualiza el nuevo registro", () => {
  cy.url().should("contains", "/webtables");
});
