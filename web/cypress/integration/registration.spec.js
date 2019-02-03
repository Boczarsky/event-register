import { getToday } from '../../src/utils'

describe("Registration", () => {
    it("when registered popup should appear", () => {
        cy.visit('http://localhost:3400/');
        cy.get('#firstName').type('Tomasz');
        cy.get('#lastName').type('Boczarski');
        cy.get('#email').type('tomasz@boczarski.pl');
        cy.get('#eventDate').type(getToday());
        cy.contains('REGISTER').click();
        cy.get('#popup').should('exist');
    })
})