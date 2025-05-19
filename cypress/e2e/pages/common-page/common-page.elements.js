export class CommonPageElements{
    static get topMenu(){
        return {
            get home(){
                return cy.contains('a', 'Home')
            },

            get contact(){
                return cy.contains('a', 'Contact')
            }
        }
    }
}