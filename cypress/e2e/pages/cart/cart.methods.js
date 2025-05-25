import { Logger } from "../../util/logger.js";
import { CommonPageMethods } from "../common-page/common-page.methods.js";
import { LoginMethods } from "../login/login.methods.js";
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

    static deleteProduct(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            link.click();
            cy.wait(10000); //Un segundo de espera
        })
    }

    static emptyCart(username, password){
        Logger.subStep('Navegando a domoblaze')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Log out')
        CommonPageMethods.logout();
        Logger.subStep('Click en home')
        CommonPageMethods.clickOnHomeOption();
        Logger.subStep('Click en Login')
        CommonPageMethods.clickLoginOption();
        Logger.subStep('Haciendo Login con ${username}/${password}')
        LoginMethods.login(username, password)
        Logger.subStep('Click en Cart')
        CommonPageMethods.clickCartOption();
        Logger.subStep('Eliminar productos del carrito')
        this.deleteProduct();
    }
}