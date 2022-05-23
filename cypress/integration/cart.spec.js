describe('Cart Page', () => {

    const email = 'voipaxauddeuni-9330@yopmail.com'
    const password = 'A12345'

    beforeEach(() => {

        cy.visit('/login');
        cy.clearCookies()

    });


     it('Verify that there is little map with your location on it on cart screen', () => {
 
        cy.get('input[name="email"]')
        .type(email)

        cy.get('input[name="password"]')
            .type(password);
 
         cy.get('button').contains('Login')
             .click();
 
        cy.wait(5000)

         cy.get('.allow-location-modal__close-icon')
             .click();

        cy.get('img[alt="me"]')
             .click();  
          
        cy.get('.down-arrow')
              .click();

        cy.wait(2000)

        cy.get('input[placeholder="Enter Delivery Address"]')
            .type('Via Vigevano, 1')

        cy.wait(3000)

        cy.get('.address-picker__contents > a').eq(1).click()
        
        cy.get('input[name="details"]')
            .type('1');

        cy.get('input[name="entrance"]')
            .type('1');

        cy.get('button[type="submit"]')
            .click()

        cy.get('nav > button').click()

        cy.get('h3').contains('Salad').click();
        
        
        // cy.get('button').should('contain', 'Explore anyway')
        //      .click();

        cy.get('.app-bar__nav__contents').contains('Salad')
            .should('have.css', 'background-color', 'rgb(0, 0, 0)')

        cy.get('[alt="Caesar Salad"]').click();

        cy.get('button').contains('Add to Order €11.00').click();

        cy.get('.auth-user-section__cart').click();

        cy.get('.user-cart-popover__cta').click();

        cy.get('.mapboxgl-map')
            .should('be.visible');

        cy.get('.delivery-payment-details--clickable > p')
            .should('contain', 'Via Vigevano 1, Milano, Italy');
     });

});