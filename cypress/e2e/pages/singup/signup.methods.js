import { CommonPageMethods } from "../common-page/common-page.methods";
import { SignupElements } from "./signup.elements";

export class SignupMethods{
    static insertUsername(username){
        SignupElements.textboxes.username.invoke('val',username) 
    }

    static insertPassword(password) {
        SignupElements.textboxes.password.invoke("val", password)
    }

    static clickSignupButton(){
        SignupElements.buttons.sigup.click();
    }

    static signup(username, password){
        this.insertUsername(username)
        this.insertPassword(password)
        this.clickSignupButton();
    }

    static verifySignupSuccesfulMessageDisplayed(){
        CommonPageMethods.verifyAlert("Sign up successful.")
    }

    static verifyThatThisUserAlreadyExistMessageIsDsiplayed(){
        CommonPageMethods.verifyAlert("This user already exist.")
    }
}