import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"

describe('template spec', () => {
  it('passes', () => {

    //Usuario
    //const usuario = "random01"
    //const contrasena = "random01"
    cy.visit('https://demoblaze.com/')              //Navegar a la pagina
    HomeMethods.clickProductLink('Iphone 6 32gb')
    cy.wait(10000)
    
    
   
    
  })
})