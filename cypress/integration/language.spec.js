describe('Language', () => {

    const email = 'voipaxauddeuni-9330@yopmail.com'
    const password = 'A12345'

    beforeEach(() => {

        cy.visit('https://helbizkitchen.com');

        cy.clearCookies()
    });

    it('Homepage - Verify that you can switch from one language to another', () => {

        cy.get('.language-select')
        // .find('button').click()
        // cy.get('img[alt="it"]').click()

        if ('img[alt="en"]', 'visible') {
            cy.get('.language-select').find('button').click()
            cy.get('img[alt="it"]').click()
            cy.get('.landing__description')
            .should('have.text', 'Scegli i piatti che preferisci dalla nostra selezione di cucine, e ricevili comodamente in un unico ordine consegnato dai nostri butler.')
        } else  {
            cy.get('.language-select').find('button').click()
            cy.get('img[alt="en"]').click()
            cy.get('.landing__description')
                .should('have.text', 'Choose your favorite dishes from our selected cuisines and place them in a single order, delivered by our Butlers')
        }
    });  


    it('Account page - Verify that you can switch from one language to another', () => {

        cy.visit('/login');
 
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
         
         cy.get('section>a').eq(4)
             .click();


        if ('input[value="it"]', 'checked') {
            cy.get('input[value="en"]')
                .check()
                .should('be.checked')
                
            }
        else {
            cy.get('input[value="en"]')
                .uncheck()
                .should('not.be.checked')
                cy.get('input[value="it"]')
                .check({force})
            }    

            cy.xpath(`//*[@id="__next"]/div[2]/main/div/div/div/div/div[2]/button`)
             .click()

    });    
});