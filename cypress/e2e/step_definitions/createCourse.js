import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given("A user should access the quales landing page", () => {
    //cypress visit the quales landing page
    cy.visit("https://academy.quales.tech/login");
});

When("A user should type in their correct credentials to login and create a course", () => {
    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com");
    cy.get('[data-testid="Password"]').type("pass1234");
    cy.get('.MuiButton-contained').click();
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click();
    cy.get('[data-testid="Title*"]').type("Intro N", {force: true});
    cy.get('[data-testid="Description*"]').type("Software Testing 33");
    cy.get('#demo-simple-select').click();
    cy.contains('Quality Assurance').click();
    cy.get('[data-testid="ImageURL"]').type("http://www.example.com/dog.jpg");
    cy.get('[data-testid="offline"]').click();
    cy.get('[data-testid="Address*"]').type("American center Calabar");
    cy.get('.css-tzsjye > .MuiButton-root').click();
});

Then("The user should successfully create a course", () => {
    cy.contains('List of Courses').should("be.visible");
    cy.contains('Course created successfully').should("be.visible");
});
