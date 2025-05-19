import { PlaceOrderElements } from "./place-order.elements"

export class PlaceOrderMethods{
    static insertName(name){
        PlaceOrderElements.textboxes.name.invoke("val", name);
    }

    static insertCountry(country){
        PlaceOrderElements.textboxes.country.invoke("val", country);
    }

    static insertCity(city){
        PlaceOrderElements.textboxes.city.invoke("val", city);
    }

    static insertCreditCard(creditCardNumber){
        PlaceOrderElements.textboxes.creditCard.invoke("val", creditCardNumber);
    }

    static insertName(month){
        PlaceOrderElements.textboxes.month.invoke("val", month);
    }

    static insertName(year){
        PlaceOrderElements.textboxes.year.invoke("val", year);
    }

    //Click en botones
    static clickCloseButton(){
        PlaceOrderElements.buttons.close.click();
    }

    static clickPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click();
    }


}