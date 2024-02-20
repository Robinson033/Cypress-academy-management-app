import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given("A user should be on the landing page", () => {
    cy.visit("/login");
});

When("The user login successfully and delete a course", () => {
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get('.MuiButton-contained').click();

    //Deleting course with cypress
    cy.get(':nth-child(8) > .MuiCardMedia-root').click();
    cy.get('.css-wvpqgg').click();
    cy.get('.MuiBox-root > .MuiButton-contained').click();
});

Then("The user should successfully delete a course", () => {
    cy.contains('Course deleted successfully').should("be.visible");
});