import { CommonPageData } from "./common-page.data"
import { CommonPageElements } from "./common-page.elements"

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.clearAllCookies(); //Limpiar el browser antes de ejecutarlo
        cy.clearLocalStorage();
        cy.visit(CommonPageData.url)
        CommonPageMethods.clickOnHomeOption();
    }

    static clickOnHomeOption(){
        CommonPageElements.topMenu.home.click();
    }

    static clickOnContactOption(){
        CommonPageElements.topMenu.contact.click();
    }

    static clickAboutUsOption(){
        CommonPageElements.topMenu.aboutUs.click();
    }

    //Si al dar click en cart da un error de la apliacion ignorar y seguir 
    static clickCartOption(){
        CommonPageElements.topMenu.cart.click();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false 
        })
    }

    static clickLoginOption(){
        CommonPageElements.topMenu.login.click();
    }

    static clickSingUpOption(){
        CommonPageElements.topMenu.signup.click();
    }

    static verifyAlert(expectedMessage){
        cy.on('window:alert', (str) =>{
            expect(str).to.equal(expectedMessage);
        });
    }

    static generateRandomString(length = 10){
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while(counter < length){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result; 
    }

    static verifySignedUser(username){
        CommonPageElements.signedUser.should('have.text', `Welcome ${username}`)
    }

    static logout(){
        cy.get('body').then($body=>{
            if($body.find('#logout2').length>0){
                CommonPageElements.topMenu.logOut.click();
            }
        })
        
    }

    
}