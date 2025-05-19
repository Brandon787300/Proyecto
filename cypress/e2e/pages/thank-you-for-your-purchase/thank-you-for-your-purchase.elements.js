export class ThankYouForYourPurchaseElements{
    static get buttons(){
        return{
            get ok(){
                return cy.contains("buttn", "Ok")
            },
        };
    }

    static get icons(){
        return {
            get greenCheckMarck(){
                return cy.get('.sa-success')
            },
        };
    }
}