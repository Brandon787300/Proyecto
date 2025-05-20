import { Logger } from "../../util/logger";
import { LoginElements } from "./login.elements";

export class LoginMethods{
    //Llenar el usuario
    static insertUsername(username){
        LoginElements.textboxes.username.invoke('val',username)
    }

    //Llenar la contraseña
    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val',password)
    }

    //Click en el boton login
    static clickOnLoginButton(){
        LoginElements.buttons.login.click()
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Log button')
        this.clickOnLoginButton()
    }
}