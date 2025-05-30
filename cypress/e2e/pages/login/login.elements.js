export class LoginElements{

    //Getter que consiguen los espacios y los botone spara iniciar sesion
    static get textboxes(){
        return{
            get username(){ 
                return cy.get('input#loginusername');
                

            },

            get password(){
                return cy.get('input#loginpassword')
            }
        };
    }

    static get buttons(){
        return{
            get close(){
                return cy.get('div[id="logInModal"] button').eq(1);
            },

            get login(){
                return cy.contains('button', 'Log in');
            }
        }
    }
}