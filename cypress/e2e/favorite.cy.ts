describe('Tag property as favorite', () => {
    beforeEach(() => {
        cy.login('host', 'host');
    });
    afterEach(() => {
        cy.logout();
    });
    it('Should be tagged as favorite', () => {
        cy.visit('/');
        cy.get('[data-test="heart-button"]')
            .first()
            .click();

        // Wait for the toast notification to appear
        cy.get('.go2072408551')
            .should('be.visible')
            .contains('Success');

    });
});