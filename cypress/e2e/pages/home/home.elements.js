export class HomeElements{
    static get categoriesMenu(){
        return{
            get phones(){
                return cy.contains('a', 'Phones');
            },

            get laptops(){
                return cy.contains('a', 'Laptops');
            },

            get monitors(){
                return cy.contains('a', 'Monitors');
            }
        };
    }

    //Selector dinamico que puede busacar cualquier producto que le pasemos
    static product(productName){
        return cy.contains("a", productName, {timeout: 30000});
    }
}