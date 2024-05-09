describe('Login Functionality', () => {
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
            .contains('Login')
            .should('exist')
            .click();

        // Wait for the login modal to be visible
        cy.get('[data-test="login-modal"]').should('be.visible');
    });

    it('Should successfully login with correct credentials', () => {
        // Fill in the login form with valid credentials
        cy.get('input[id="email"]').type('host');
        cy.get('input[id="password"]').type('host');
        cy.get('[data-test="login-modal"]')
            .contains('Continue')
            .click();

        // Wait for the toast notification to appear
        cy.get('.go2072408551')
            .should('be.visible')
            .contains('Logged in');

        // Assert that the login modal does not exist in the DOM
        cy.get('[data-test="login-modal"]').should('not.exist');

        // Assert that the user menu is updated
        cy.get('[data-test="user-menu-items"]')
            .contains('Logout')
            .should('exist')
    });

    it('Should display an error message with incorrect credentials', () => {
        // Fill in the login form with incorrect credentials
        cy.get('input[id="email"]').type('incorrectemail');
        cy.get('input[id="password"]').type('incorrectpassword');

        // Click on the "Continue" button to submit the login form
        cy.get('[data-test="login-modal"]')
            .contains('Continue')
            .click();

        // Wait for the toast notification to appear
        cy.get('.go2072408551')
            .should('be.visible')
            .contains('Invalid credentials'); // Assuming the error message contains the text 'Error'

        // Assert that the login modal remains visible
        cy.get('[data-test="login-modal"]').should('be.visible');
    });

    it('Should show that email and password inputs are required', () => {
        // Click on the "Continue" button without entering any credentials
        cy.get('[data-test="login-modal"]')
            .contains('Continue')
            .click();

        // Assert that the email and password input fields have the specified border color
        cy.get('input[id="email"]').should('have.css', 'border-color', 'rgb(244, 63, 94)');
        cy.get('input[id="password"]').should('have.css', 'border-color', 'rgb(244, 63, 94)');

        // Assert that the login modal remains visible
        cy.get('[data-test="login-modal"]').should('be.visible');
    });
});

