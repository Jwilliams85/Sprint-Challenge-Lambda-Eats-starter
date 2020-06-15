describe('Testing our forom inputs', function(){
    beforeEach(function(){
        cy.visit("http://localhost:3001/pizza")
    });
    it('tests name input', function() {
        cy.get('[data-cy=name]').type("Testing Name Out")
    });
    it('tests checkbox input', function() {
        cy.get('[data-cy=checkbox1]').check().should('be.checked')
    })
    it('tests checkbox input', function() {
        cy.get('[data-cy=checkbox2]').check().should('be.checked')
    })
    it('tests checkbox input', function() {
        cy.get('[data-cy=checkbox3]').check().should('be.checked')
    })

    it('tests checkbox input', function() {
        cy.get('[data-cy=checkbox4]').check().should('be.checked')
    })

    it('tests form submit', function() {
        cy.get('[data-cy=submit]').submit()
    })

    it('tests email input', function() {
        cy.get('[data-cy=email]').type("Testing Email Out")
    });
    
});