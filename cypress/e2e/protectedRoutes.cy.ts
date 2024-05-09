describe('Unauthenticated User Functionality', () => {
    it('Should not be able to get these routes', () => {
        const routes = ['trips', 'reservations', 'properties', 'favorites'];
        for (const route of routes) {
            cy.visit('/' + route);
            cy.wait(1000);
            cy.url().should('include', '/?callbackUrl');
        }
    });
});

describe('Authenticated User Functionality', () => {
    before(() => {
        cy.login('host', 'host');
    });
    after(() => {
        cy.logout();
    });
    it('Should be able to get these routes', () => {
        const routes = ['trips', 'reservations', 'properties', 'favorites'];
        for (const route of routes) {
            cy.visit('/' + route);
            cy.wait(1000);
            cy.url().should('include', '/' + route);
        }
    });
})