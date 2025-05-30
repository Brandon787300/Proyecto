import { HomeElements } from "./home.elements";

//Clicks en menus
export class HomeMethods{
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click();
    }

    static clickOnLaptopsOption(){
        HomeElements.categoriesMenu.laptops.click();
    }

    static clickOnMonitorsOption(){
        HomeElements.categoriesMenu.monitors.click();
    }
    
    static clickProductLink(productName){
        HomeElements.product(productName).click();
    }

    //Metodo para verificar productos
    static verifyProductDisplayed(productName){
        HomeElements.product(productName).should('be.visible')
    }

    static verifyHomePageisShown(){
        cy.url().should('include', 'index.html')
    }
}