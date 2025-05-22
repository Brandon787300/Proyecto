import { CartElements } from "./cart.elements.js";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();

    } 

    //Verificar que el producto se agrega
    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }
}