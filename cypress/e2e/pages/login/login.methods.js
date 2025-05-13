import { LoginElements } from "./login.elements";

export class LoginMethods{
    //Llenar el usuario
    static insertUsername(username){
        LoginElements.textboxes.username.type(username)
    }

    //Llenar la contraseña
    static insertPassword(password){
        LoginElements.textboxes.password.type(password)
    }

    //Click en el boton login
    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickOnLoginButton()
    }
}