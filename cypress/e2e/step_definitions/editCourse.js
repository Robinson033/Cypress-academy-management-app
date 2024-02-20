import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given("A user should be on the quales landing page", () => {
    cy.visit("https://academy.quales.tech/login");
});

When("The user types in their correct credentials to loginand edit course", () => {
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get('.MuiButton-contained').click();

    //Editing course with cypress
    cy.get(':nth-child(2) > .MuiCardMedia-root').click();
    cy.get('.css-klop1v').click();
    cy.get('[data-testid="Title*"]').clear({force: true}).type("Intro N2");
    cy.get('[data-testid="Address*"]').clear().type("American Corner Calabar");
    cy.get('.css-tzsjye > .MuiButton-root').click();
});

Then("The user should successfully edit a course", () => {
    cy.contains('Course updated successfully').should("be.visible");
});