describe('Registration Functionality', () => {
    before(() => {
        // reset and seed the database prior to every test
        cy.exec('npm run seed');
    })
    beforeEach(() => {
        cy.visit('/');

        // Click on the user menu bar
        cy.get('[data-test="user-menu-bar"]').click();

        // Ensure that the user menu items are visible
        cy.get('[data-test="user-menu-items"]').should('be.visible');

        // Check if user menu items contain a child element with content "Login"
        cy.get('[data-test="user-menu-items"]')
            .contains('Sign up')
            .should('exist')
            .click();

        // Wait for the register modal to be visible
        cy.get('[data-test="register-modal"]').should('be.visible');
    });

    it('Should successfully register with valid credentials', () => {
        // Fill in the registration form with valid credentials
        cy.get('input[id="email"]').type('test');
        cy.get('input[id="name"]').type('test');
        cy.get('input[id="password"]').type('test');

        // Submit the registration form
        cy.get('[data-test="register-modal"]')
            .contains('Continue')
            .click();

        // Wait for the toast notification to appear
        cy.get('.go2072408551')
            .should('be.visible')
            .contains('Registered!');

        // Assert that the register modal does not exist in the DOM and that the login model is visible
        cy.get('[data-test="register-modal"]').should('not.exist');
        cy.get('[data-test="login-modal"]').should('be.visible');
    });

    it('Should display error messages for empty fields', () => {
        // Click on the "Continue" button without entering any credentials
        cy.get('[data-test="register-modal"]')
            .contains('Continue')
            .click();

        // Assert that the email and password input fields have the specified border color
        cy.get('input[id="email"]').should('have.css', 'border-color', 'rgb(244, 63, 94)');
        cy.get('input[id="name"]').should('have.css', 'border-color', 'rgb(244, 63, 94)');
        cy.get('input[id="password"]').should('have.css', 'border-color', 'rgb(244, 63, 94)');

        // Assert that the register modal remains visible
        cy.get('[data-test="register-modal"]').should('be.visible');
    });

    it('Should display error message for taken email', () => {
        // Fill in the registration form with invalid email format
        cy.get('input[name="email"]').type('test');
        cy.get('input[name="password"]').type('test1');
        cy.get('input[name="name"]').type('test1');

        // Click on the "Continue" button without entering any credentials
        cy.get('[data-test="register-modal"]')
            .contains('Continue')
            .click();

        // Wait for the toast notification to appear
        cy.get('.go2072408551')
            .should('be.visible')
            .contains('This email is already taken. Try another email');
    });
});
