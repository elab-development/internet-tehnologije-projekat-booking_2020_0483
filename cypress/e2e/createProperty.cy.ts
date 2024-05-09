describe('Authenticated User Functionality', () => {
    beforeEach(() => {
        cy.login('host', 'host');
    });
    afterEach(() => {
        cy.logout();
    })
    it('Should be able to create new property', () => {
        cy.get('[data-test="create-property-menu-item"]').click();
        cy.get('[data-test="rent-modal"]').should('be.visible');
    });
});

describe('Unauthenticated User Functionality', () => {
    it('Should not be able to create new property', () => {
        cy.visit('/');
        cy.get('[data-test="create-property-menu-item"]').click();
        cy.get('[data-test="login-modal"]').should('be.visible');
    });
});