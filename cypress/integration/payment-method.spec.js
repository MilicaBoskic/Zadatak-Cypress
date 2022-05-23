describe('Account Page - Payment Method', () => {

    const email = 'voipaxauddeuni-9330@yopmail.com'
    const password = 'A12345'

    beforeEach(() => {

        cy.visit('https://helbizkitchen.com');

    });
    
    it('Verify that you can add new payment method', () => {

        
        cy.visit('/login');

        cy.get('input[name="email"]')
        .type(email)

        cy.get('input[name="password"]')
            .type(password);

        cy.get('button').contains('Login')
            .click();

        cy.wait(4000)

         cy.get('.allow-location-modal__close-icon')
             .click();

        cy.get('.auth-user-section__avatar')
            .click()
        
        cy.get('section>a').eq(2)
            .click();

        cy.get('.payment-methods__add-payment')
            .click();

        cy.get('input[name="name"]')
            .type('Test Test');

        cy.get('input[name="cardnumber"]')
            .type('4242424242424242');

        cy.get('input[placeholder="MM / YY"]')
            .type('0330');

        cy.get('span>div').eq(1)
            .type('0330');

        cy.get('input[name="cvc"]')
            .type('737');

        cy.get('button[type="submit"]')
            .click();

    });

    it('Verify that you can delete payment method card', () => {

        cy.visit('/account');

    });

});
