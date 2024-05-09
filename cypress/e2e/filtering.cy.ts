describe('Filtering by category', () => {
    it('See properties just from selected category', () => {
        cy.visit('/');

        // Define an array of categories
        const categories = ['Beach', 'Windmills', 'Modern', 'Countryside', 'Pools', 'Islands', 'Lake', 'Skiing', 'Castles', 'Caves', 'Camping', 'Arctic', 'Desert', 'Barns', 'Lux']; // Example categories

        // Iterate over each category
        categories.forEach((category) => {
            // Select category
            cy.get('[data-test="categories-bar"]')
                .should('be.visible')
                .contains(category)
                .click();

            // Check if category is selected
            cy.get('[data-test="categories-bar"]')
                .contains(category)
                .should('have.css', 'color', 'rgb(38, 38, 38)'); // Adjust color as needed

            // Check if the URL contains the selected category
            cy.url().should('include', `/?category=${encodeURIComponent(category)}`); // Encode category in URL

            // Check if properties belong to the selected category
            cy.get('[data-test="property-category"]').each($item => {
                cy.wrap($item).should('have.text', category);
            });
        });
    });

    it('Should see empty state', () => {
        cy.visit('/?category=Beachh');

        cy.get('[data-test="empty-state"]').should('be.visible');
    });
});

describe('Search by location, date and number of guests', () => {
    it('See properties just from selected attributes', () => {
        cy.visit('/');

        cy.get('[data-test="search-bar"]')
            .should('be.visible')
            .click();

        cy.get('[data-test="search-modal"]').should('be.visible');
    })
})