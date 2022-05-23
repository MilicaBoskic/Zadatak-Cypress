describe('Sign up Page', () => {

    const email = 'voipaxauddeuni-9330@yopmail.com'
    const password = 'A12345'
    const confirmPassword = 'A12345'
    const invalidEmail = '@gmail.com'
    const invalidPassword = '123456'
    const invalidConfirmPassword = '123456'

    beforeEach(() => {

        cy.visit('https://helbizkitchen.com');
    });
    
    it('Verify that get started button is clickable', () => {

        cy.get('button').contains('Get Started').click();

        cy.url().should('equal', 'https://helbizkitchen.com/login')
    });

    it('Verify that you need to be logged in in order to add items to order', () => {

        cy.get('h3').contains('Salad').click();
        
        cy.get('.app-bar__nav__contents').contains('Salad').should('have.css', 'background-color', 'rgb(0, 0, 0)')

        // cy.get('main > div').eq(6).should('be.visible')

        cy.get('[alt="Caesar Salad"]').click();

        cy.get('button').contains('Add to Order €11.00').click();

        cy.url().should('equal', 'https://helbizkitchen.com/login')
    });

     it('Verify that you can open sign up screen', () => {

        cy.get('button').contains('Get Started').click();

        cy.get('a[href*="register"]').click();

        cy.url().should('equal', 'https://helbizkitchen.com/register')
    });

    it('Verify that you cannot sign up with invalid email format', () => {

        cy.visit('/register');

        cy.get('input[name="email"]').type(invalidEmail)
            .should('have.value', invalidEmail);

        cy.get('input[name="password"]').type(password)
            .should('have.value', password);

        cy.get('input[name="confirmPassword"]').type(confirmPassword)
            .should('have.value', confirmPassword);
        
        cy.get('input[name="email"]')
            .should('have.class', 'input-error-highlight')
            .and('have.css', 'color', 'rgb(255, 0, 30)')

        cy.get('button').contains('Next')  
            .should('be.disabled')
    //      .should('have.attr', 'disabled');
    });

    it('Verify that you cannot sign up with invalid password', () => {

        cy.visit('/register');

        cy.get('input[name="email"]').type('test@gmail.com');

        cy.get('input[name="password"]').type(invalidPassword)
            .should('have.value', invalidPassword);

        cy.get('input[name="confirmPassword"]').type(password)
            .should('have.value', password);
    
        cy.get('input[name="email"]').click()

        cy.get('input[name="password"]')
            .should('have.class', 'input-error-highlight')
            .and('have.css', 'color', 'rgb(255, 0, 30)');

        cy.get('input[name="confirmPassword"]')
            .should('have.class', 'input-error-highlight')
            .and('have.css', 'color', 'rgb(255, 0, 30)');

        cy.get('button').contains('Next')
            .should('be.disabled')
      //     .should('have.attr', 'disabled');
    });

    it('Verify that you cannot login if confirmation password does not match actual password', () => {

        cy.visit('/register');

        cy.get('input[name="email"]').type(email)
            .should('have.value', email);

        cy.get('input[name="password"]').type(password)
            .should('have.value', password);

        cy.get('input[name="confirmPassword"]').type(invalidConfirmPassword)
            .should('have.value', invalidConfirmPassword);
    
        cy.get('input[name="email"]').click()

        cy.get('input[name="confirmPassword"]')
            .should('have.class', 'input-error-highlight')
            .and('have.css', 'color', 'rgb(255, 0, 30)');

        cy.get('button').contains('Next')
            .should('be.disabled')
//          .should('have.attr', 'disabled');
    });

});