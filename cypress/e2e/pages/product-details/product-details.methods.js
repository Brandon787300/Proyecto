import { CommonPageMethods } from '../common-page/common-page.methods';
import {ProductDetailsElements} from './product-details.elements';

export class ProducDetailMethods{
    static clickOnAddToCartButton(){
        ProductDetailsElements.buttons.addToCart.click();
    }

    //Veirificar que le boton agregar al carrito es visible
    static verifyProductDetailIsDisplayed(){
        ProductDetailsElements.buttons.addToCart.should('be.visible')
    }

    //Verificar que el producto se agrego al carrito
    static verifyPorductAddedMessage(){
        CommonPageMethods.verifyAlert('Product added')
    }
}