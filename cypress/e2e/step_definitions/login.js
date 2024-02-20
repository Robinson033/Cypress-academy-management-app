import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given("A user is on the quales landing page", () => {
    //cypress visit the quales landing page
    cy.visit("https://academy.quales.tech/login");
});

When("A user types in their correct username and password", () => {
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get('.MuiButton-contained').click();
});

Then("The user should be logged into the app", () => {
    cy.contains('Add Course').should("be.visible");
});