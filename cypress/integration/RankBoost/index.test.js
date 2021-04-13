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

    it ('Button should be disabled then email is incorrect', () => {
        cy.get('[data-cy=email-input]').clear().type('test')
        cy.get('[data-cy=checkout_btn]').should('be.disabled')
    })

    it ('Button should be active when email is correct', () => {
        cy.get('[data-cy=email-input]').clear().type('test@test.ru')
        cy.get('[data-cy=checkout_btn]').should('be.not.disabled')
    })

    it ('200 - 1200 on PC = $12.5', () => {
        cy.get('[data-cy=division-from-input]').clear().type('200')
        cy.get('[data-cy=division-to-input]').clear().type('1200')

        cy.get('[data-cy=price]').should('contain.text', '12.5')
    })

    it ('1200 - 2400 on PlayStation = $21', () => {
        cy.get('[data-cy=platform-selector]').select('PlayStation')
        cy.get('[data-cy=division-from-input]').clear().type('1200')
        cy.get('[data-cy=division-to-input]').clear().type('2400')

        cy.get('[data-cy=price]').should('contain.text', '21')
    })

    it ('Order box contains platform', () => {
        cy.get('[data-cy=platform-selector]').select('XBOX');

        cy.get('[data-cy=orders-type]').should('contain.text', 'XBOX')
    })
})
