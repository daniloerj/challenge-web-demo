import {slowCypressDown} from 'cypress-slow-down'
slowCypressDown()

describe('Suite de pruebas demoBlaze', () => {

  function makeUserId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  const user = makeUserId()
  const pass = '123456'
  const phone = 'Nokia lumia 1520'

  it('create user', () => {
    cy.visit('https://www.demoblaze.com')
    cy.get('#signin2').click()
    cy.get('#sign-username').type(user)
    cy.get('#sign-password').type(pass)
    cy.get('button[type="button"]').contains('Sign up').click()
  })

  it('login user', () => {
    cy.get('#login2').click()
    cy.get('#loginusername').type(user)
    cy.get('#loginpassword').type(pass)
    cy.get('button[type="button"]').contains('Log in').click()
    cy.get('#nameofuser').should('contain',`Welcome ${user}`)
  })

  it('add phone to shopping cart', () => {
    cy.get('[onclick*="phone"]').click()
    cy.contains(phone).click()
    cy.contains('Add to cart').click()
    cy.get('#cartur').click()
  })
})