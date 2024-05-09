/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email: string, password: string) => {
    cy.visit('/');

    // Click on the user menu bar
    cy.get('[data-test="user-menu-bar"]').click();

    // Check if user menu items contain a child element with content "Login"
    cy.get('[data-test="user-menu-items"]')
        .contains('Login')
        .click();

    // Fill in the login form with valid credentials
    cy.get('input[id="email"]').type(email);
    cy.get('input[id="password"]').type(password);
    cy.get('[data-test="login-modal"]')
        .contains('Continue')
        .click();
    cy.wait(1000);
});

Cypress.Commands.add('logout', () => {
    cy.visit('/');

    // Click on the user menu bar
    cy.get('[data-test="user-menu-bar"]').click();

    // Check if user menu items contain a child element with content "Login"
    cy.get('[data-test="user-menu-items"]')
        .contains('Logout')
        .click();
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }