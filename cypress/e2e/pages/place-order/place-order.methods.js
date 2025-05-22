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

    static insertMonth(month){
        PlaceOrderElements.textboxes.month.invoke("val", month);
    }

    static insertYear(year){
        PlaceOrderElements.textboxes.year.invoke("val", year);
    }

    //Click en botones
    static clickCloseButton(){
        PlaceOrderElements.buttons.close.click();
    }

    static clickPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click();
    }

    static insertOrderInformation(data){
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.insertCity(data.city)
        this.insertCreditCard(data.creditCard)
        this.insertMonth(data.month)
        this.insertYear(data.year)
        
    }


}