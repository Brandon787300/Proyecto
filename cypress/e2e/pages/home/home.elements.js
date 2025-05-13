export class HomeElements{
    static get categoriesMenu(){
        return{
            get phone(){
                cy.contains('a', 'Phones')
            },

            get laptops(){
                cy.contains('a', 'Laptops')
            },

            get monitors(){
                cy.contains('a', 'Monitors')
            }
        };
    }

    //Selector dinamico que puede busacar cualquier producto que le pasemos
    static product(productName){
        return cy.contains("a", productName) 
    }
}