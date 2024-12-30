describe('Selenium WebDriver Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com');
    });

    it('should perform a Google search', () => {
        cy.get('input[name="q"]').type('OpenAI{enter}');
        cy.title().should('include', 'OpenAI');
    });

    it('should check the page title', () => {
        cy.visit('https://www.example.com');
        cy.title().should('eq', 'Example Domain');
    });
});
