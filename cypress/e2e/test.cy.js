///<reference types="cypress" />
import "cypress-real-events";

const link = "www.hostinger.com"
const randomEmail = "test" + Cypress._.random(0, 1e6) + "@test.lt"

describe('Hostinger', () => {
    before(() => {
        cy.viewport(1920, 1000)
      })
    it('Hostinger', () => {
        cy.visit(link)
        cy.get('.h-carousel-card-wrapper').eq(1).scrollIntoView()
        cy.get('.h-button.h-button-primary.h-button-outline.h-pricing-card__add-to-cart').eq(1).click()
        cy.get('.cart-period',{ timeout: 10000 }).contains('24 months').should('be.visible').click()
        cy.get('.h-input.primary.create-account__email-input').type(randomEmail)
        cy.get('.h-input.primary.login__password.h-mt-24').type(randomEmail)
        cy.get('#first-name-input').scrollIntoView().type('Test name')
        cy.get('#last-name-input').type('test surname')
        cy.get('#phone-number-input').type('00000000')
        cy.get('#cardholdername').type('testas testauskas').realPress('Tab').realType("4422444444444444").realPress('Tab').realType("0862 111")
    })
  })
