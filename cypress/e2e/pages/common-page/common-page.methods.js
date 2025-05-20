import { CommonPageData } from "./common-page.data"
import { CommonPageElements } from "./common-page.elements"

export class CommonPageMethods{
    static navigateToDemoBlaze(){
        cy.visit(CommonPageData.url)
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

    static clickCartOption(){
        CommonPageElements.topMenu.cart.click();
    }

    static clickLoginOption(){
        CommonPageElements.topMenu.login.click();
    }

    static clickSingUpOption(){
        CommonPageElements.topMenu.signup.click();
    }

    
}