import { Logger } from "../../util/logger";
import { CommonPageMethods } from "../common-page/common-page.methods";
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
        
        LoginElements.buttons.login.click();
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUsername(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Log in button')
        this.clickOnLoginButton()
    }

    //Para el inicio de sesion invalido
    static verifyWronPasswordMessage(){
        CommonPageMethods.verifyAlert('Wrong password.')
    }
}