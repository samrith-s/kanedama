describe('route: /accounts', () => {
    it('should render the accounts page', () => {
        cy.visit('/accounts');
        cy.get('[data-testid=accounts-input]').should('exist');
        cy.get('[data-testid=account-card]').its('length').should('be.gt', 0);
    });

    it('should prefill input on search', () => {
        cy.visit('/accounts?q=261');
        cy.get('[data-testid=accounts-input]').should('have.value', '261');
    });

    it('should show a no results element when no search matches', () => {
        cy.visit('/accounts?q=axaxaxax');
        cy.get('[data-testid=accounts-no-result]').should('exist');
    });
});
