describe('route: /', () => {
    before(() => {
        cy.visit('/');
    });

    it('should render the home page', () => {
        cy.get('[data-testid=user-name').should('exist').and('contain.text', 'Mr. Joris Caron');
        cy.get('[data-testid=user-id')
            .should('exist')
            .and('contain.text', 'INSEE 1NNaN46702872 66');
        cy.get('[data-testid=user-since')
            .should('exist')
            .and('contain.text', 'Member since 29/09/2017');
    });

    it('renders business info block', () => {
        cy.get('[data-testid=business-info]').should('exist');
    });

    it('renders personal info block', () => {
        cy.get('[data-testid=personal-info]').should('exist');
    });

    it('renders contact info block', () => {
        cy.get('[data-testid=contact-info]').should('exist');
    });
});
