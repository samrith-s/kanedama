describe('header', () => {
    it('should navigate to home on logo click', () => {
        cy.visit('/accounts');
        cy.get('[data-testid=logo]').click();
        cy.location('pathname').should('equal', '/');
    });

    it('should navigate to accounts on `Accounts` click', () => {
        cy.visit('/');
        cy.get('[data-testid=nav-accounts]').click();
        cy.location('pathname').should('equal', '/accounts');
    });
});
