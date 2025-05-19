import { CartElements } from "./cart.elements.js";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();

    } 
}