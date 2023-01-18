import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(
  "El usuario se dirige hacia el mantenedor de WebTables para eliminar un registro",
  () => {
    cy.GoWebTables();
  }
);

When("El usuario desliza su cursor a un registro y click en eliminar", () => {
  cy.DeleteRegistro();
});

Then("El usuario visualiza el registro ha sido eliminado", () => {
  cy.url().should("contains", "/webtables");
});
