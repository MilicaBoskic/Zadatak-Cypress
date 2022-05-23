 describe('Login Page', () => {

  const email = 'voipaxauddeuni-9330@yopmail.com'
  const password = 'A12345'
  const invalidPassword = 'A123456'

    beforeEach(() => {

        cy.visit('/login');
        
    });

    it('Verify that you cannot login without entering email address', () => {

        cy.get('input[name="password"]').type(password)
        .should('have.value', password)

        cy.get('input[name="email"]').click()
            .should('have.class', 'input-error-highlight')
            .and('have.css', 'color', 'rgb(255, 0, 30)')

        cy.get('button').contains('Login')
            .should('be.disabled')
//          .should('have.attr', 'disabled');
    });
    
    it('Verify that you cannot login with invalid password', () => {
      
        cy.get('input[name="email"]').type(email)
          .should('have.value', email)

        cy.get('input[name="password"]').type(invalidPassword)
          .should('have.value', invalidPassword)

        cy.get('button').contains('Login').click();

        cy.get('div')
            .should('contain', 'Bad password')

        cy.get('.MuiCollapse-wrapper')
            .should('be.visible')
            .and('contain', 'Bad password');

        cy.get('.forgot-password')
            .should('be.visible');

    });

    it('Verify that you can login with right email and password', () => {

        cy.get('input[name="email"]').type(email)
          .should('have.value', email);

        cy.get('input[name="password"]').type(password)
          .should('have.value', password);

        cy.get('button').contains('Login').click();

        cy.url()
            .should('equal', 'https://helbizkitchen.com/');

        cy.get('.allow-location-modal__close-icon').click();
//      cy.get('button').contains('Continue').click();

        cy.get('.auth-user-section')
            .should('be.visible');

        cy.get('.auth-user-section__avatar').click()

        cy.get('.user-nav-popover')
            .should('contain', 'Logout')
          });
    });