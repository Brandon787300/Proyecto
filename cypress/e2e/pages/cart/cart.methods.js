import { CartElements } from "./cart.elements.js";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();

    } 

    //Verificar que el producto se agrega
    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    //Verificar que la seccion de Cart se muestre verificando la url
    static verifyCartPageIsShow(){
        cy.url().should('include','cart.html')
    }

    static clickOnPlaceOrderButton(){
        CartElements.buttons.placeOrder.click();
    }
}