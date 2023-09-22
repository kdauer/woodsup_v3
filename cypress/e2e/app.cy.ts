function navigateToPageAndCheckContent(page: string, content: string) {
    cy.visit('http://localhost:3000/')
    cy.get(`a[href*="${page}"]`).click()
    cy.url().should('include', `/${page}`)
    cy.contains(content)
}

describe('Navigation', () => {
    it('should navigate to the about page', () => {
        navigateToPageAndCheckContent('about', 'Carola Rackete')
    })
    it('should navigate to the contact page', () => {
        navigateToPageAndCheckContent('contact', 'woodsup@posteo.de')
    })
    it('should navigate to the legal notice page', () => {
        navigateToPageAndCheckContent('legal-notice', 'Wollestraße')
    })
    it('should navigate to the motivation page', () => {
        navigateToPageAndCheckContent('motivation', '100.000')
    })
    it('should navigate to the privacy policy page', () => {
        navigateToPageAndCheckContent('privacy-policy', 'Wollestraße')
    })
    it('should navigate to the projects page', () => {
        navigateToPageAndCheckContent('projects', '2018')
    })
    it('should navigate to the support page', () => {
        navigateToPageAndCheckContent('support', 'Paypal')
    })
})

describe('Color mode', () => {
    it('should change the color theme', () => {
        cy.visit('http://localhost:3000/')
        if (Cypress.$('body').hasClass('light')) {
            cy.get('[aria-label="Toggle color mode"]').click()
            cy.get('body').should('have.class', 'dark')
        } else {
            cy.get('[aria-label="Toggle color mode"]').click()
            cy.get('body').should('have.class', 'light')
        }
    })
})
