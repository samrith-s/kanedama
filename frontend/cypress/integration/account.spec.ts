const VISIT_URL =
    '/accounts/eyJhY2NvdW50X2lkIjoiYWZjZjJiZDAtOWE3Mi0xMWU5LTg2ZWYtMDdjMmY4NjNmZWU3IiwiYWNjb3VudF90eXBlIjoiVFJBTlNBQ1RJT04iLCJpYmFuIjoiR0IwOFRYTUUwMDgzNTMyNjE3ODM0NiIsInN3aWZ0X2JpYyI6IlRYTUVHQjQwIiwic29ydF9jb2RlIjoiMDA4MzUzIiwiYWNjb3VudF9udW1iZXIiOiIyNjE3ODM0NiIsImN1cnJlbmN5IjoiR0JQIiwiYXZhaWxhYmxlIjoxNzUuNTIsImN1cnJlbnQiOjE3NS41MiwidXBkYXRlX3RpbWVzdGFtcCI6IjIwMTktMDgtMTMgMTc6Mjk6MTIifQ==';

describe('accounts', () => {
    beforeEach(() => {
        cy.visit(VISIT_URL);
    });

    it('should navigate to a single account page', () => {
        cy.get('[data-testid=accounts-page]').should('exist');
    });

    it('should render all the account information', () => {
        cy.get('[data-testid=account-number]').should('have.length', 2);
        cy.get('[data-testid=iban]').should('have.length', 2);
        cy.get('[data-testid=swift]').should('have.length', 2);
        cy.get('[data-testid=account-type]').should('have.length', 2);
    });

    it('should show transactions for current year', () => {
        const currentYear = new Date().getFullYear();
        cy.get('[data-testid=year]').should('have.value', currentYear);
        cy.get('[data-testid=transactions-header]').should(
            'contain.text',
            `Transactions for ${currentYear}`
        );
    });

    it('should change year on selection', () => {
        const previousYear = new Date().getFullYear() - 1;
        cy.get('[data-testid=year]').select(previousYear.toString());
        cy.location('search').should('contain', `year=${previousYear}`);
        cy.get('[data-testid=year]').should('have.value', previousYear);
        cy.get('[data-testid=transactions-header]').should(
            'contain.text',
            `Transactions for ${previousYear}`
        );
    });

    it('should preload values if year query parameter is present', () => {
        const previousYear = new Date().getFullYear() - 1;
        cy.visit(VISIT_URL + `?year=${previousYear}`);
        cy.get('[data-testid=year]').should('have.value', previousYear);
        cy.get('[data-testid=transactions-header]').should(
            'contain.text',
            `Transactions for ${previousYear}`
        );
    });
});
