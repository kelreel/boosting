/// <reference types="cypress" />

describe('Rank boost', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl') + '/rank-boosting')
    })

    const INITIAL_CURRENT_RANK = 200;
    const INITIAL_DESIRED_RANK = 1200;
    const MAX_RANK = 20000;

    it('Current rank 200, desired 1200', () => {
        cy.get('[data-cy=division-from-input]').should('have.value', INITIAL_CURRENT_RANK)
        cy.get('[data-cy=division-to-input]').should('have.value', INITIAL_DESIRED_RANK)
    })

    it ('Current rank plus & minus btns', () => {
        cy.get('[data-cy=minus_cur_rank_btn]').click().click()
        cy.get('[data-cy=division-from-input]').should('have.value', INITIAL_CURRENT_RANK - 200)

        cy.get('[data-cy=plus_cur_rank_btn]').click()
        cy.get('[data-cy=division-from-input]').should('have.value', INITIAL_CURRENT_RANK - 200 + 100)
    })

    it ('Desired rank plus & minus btns', () => {
        cy.get('[data-cy=minus_desired_rank_btn]').click().click()
        cy.get('[data-cy=division-to-input]').should('have.value', INITIAL_DESIRED_RANK - 200)

        cy.get('[data-cy=plus_desired_rank_btn]').click()
        cy.get('[data-cy=division-to-input]').should('have.value', INITIAL_DESIRED_RANK - 200 + 100)
    })

    it ('Type "minus" values', () => {
        cy.get('[data-cy=division-from-input]').type('-1400').should('have.value', 1400)
        cy.get('[data-cy=division-to-input]').type('-1400').should('have.value', 1400)

        cy.get('[data-cy=division-from-input]').clear().type('2000').should('have.value', 2000)
        cy.get('[data-cy=division-to-input]').should('have.value', 2000)
    })

    it ('Type mote than MAX rank', () => {
        cy.get('[data-cy=division-from-input]').clear().type('99999').should('have.value', MAX_RANK)
        cy.get('[data-cy=division-to-input]').clear().type('99999').should('have.value', MAX_RANK)
    })
})
