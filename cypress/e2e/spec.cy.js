import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {

    //Usuario
    const usuario = "random01"
    const contrasena = "random01"
    cy.visit('https://demoblaze.com/')              //Navegar a la pagina
    cy.get('a[data-target="#logInModal"]').click()  //
    
    /*
    LoginMethods.insertUsername("Hola")
    LoginMethods.insertPassword("Hola")
    cy.wait(2000)
    LoginMethods.clickOnLoginButton()
    */

    //Todo el code de arriba se resume a un sola linea 
    LoginMethods.login(usuario, contrasena)

    //Verificacion
    cy.get('a#nameofuser').should('contain.text', usuario)
    cy.wait(10000)
  })
})