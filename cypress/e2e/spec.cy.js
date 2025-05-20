import { CartMethods } from "./pages/cart/cart.methods"
import { HomeMethods } from "./pages/home/home.methods"
import { LoginMethods } from "./pages/login/login.methods"
import { Logger } from "./util/logger"

xdescribe('template spec', () => {
  it('passes', () => {

    //Usuario
    const usuario = "random01"
    const contrasena = "random01"

    //----------------------------------------
    Logger.stepNumber(1)
    Logger.step('Navigate to Demoblaze page')
    cy.visit('https://demoblaze.com/')  

    //----------------------------------------
    Logger.stepNumber(2)
    Logger.step('Click on "Login" link ')
    cy.get('a[data-target="#logInModal"]').click()

    //----------------------------------------
    Logger.stepNumber(3)
    Logger.step(`Login with this credentials: "${usuario}/${contrasena}"`)
    LoginMethods.login(usuario, contrasena)
    Logger.verification(`The home should show "Welcome  ${usuario}" text`)
    cy.get('a#nameofuser').should('contain.text', usuario)
   

  })
})