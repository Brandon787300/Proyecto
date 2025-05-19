import { CartMethods } from "./pages/cart/cart.methods"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {

    //Usuario
    const usuario = "random01"
    const contrasena = "random01"
    cy.visit('https://demoblaze.com/')  
    cy.wait(30000)

    CartMethods.clickOnDeleteLink('Nokia lumia 1520')
    cy.wait(30000)

    /*
    cy.get('a[data-target="#logInModal"]').click()            //Navegar a la pagina
    LoginMethods.login(usuario, contrasena)
    cy.get('a#nameofuser').should('contain.text', usuario)
    */
    /*
    CartMethods.clickOnDeleteLink('Nokia lumia 1520')
    cy.wait(30000)
    */
    
   
    
  })
})