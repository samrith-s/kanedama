describe('route: /', () => {
    it('should render the home page', () => {
        cy.visit('/');
        cy.get('[data-testid=user-name').should('exist').and('contain.text', 'Mr. Joris Caron');
        cy.get('[data-testid=user-id')
            .should('exist')
            .and('contain.text', 'INSEE 1NNaN46702872 66');
        cy.get('[data-testid=user-since')
            .should('exist')
            .and('context.text', 'Member since 29/09/2017');
    });
});
