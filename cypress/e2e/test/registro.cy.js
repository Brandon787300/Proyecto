import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { SignupMethods } from "../pages/singup/signup.methods";
import { Logger } from "../util/logger";

//Generar usuario y pass aleatorios 
const user = CommonPageMethods.generateRandomString();
const pass = CommonPageMethods.generateRandomString(7);

//Datos de una cuenta existente
const existingUser = LoginData.validCredentials.username

describe(CommonPageData.testSuites.registro, ()=>{
    it('Registro de usuario válido', ()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        //-----------------------------------------
        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sing up" en la barra de navegacion')
        CommonPageMethods.clickSingUpOption();

        //-----------------------------------------
        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con infromacion válida')
        SignupMethods.insertUsername(user)
        SignupMethods.insertPassword(pass)

        //-----------------------------------------
        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sign up" para registrar el usuario')
        SignupMethods.clickSignupButton();
        Logger.verification('Verificar que se muestre el mensaje "Sign up succesful"')
        SignupMethods.verifySignupSuccesfulMessageDisplayed();
    });

    it('Registro de usuario inválido', ()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        //-----------------------------------------
        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sing up" en la barra de navegacion')
        CommonPageMethods.clickSingUpOption();

        //-----------------------------------------
        Logger.stepNumber(3)
        Logger.step('Completar todos los campos obligatorios con infromacion inválida')
        SignupMethods.insertUsername(existingUser)
        SignupMethods.insertPassword(pass)

        //-----------------------------------------
        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sign up" para registrar el usuario')
        SignupMethods.clickSignupButton();
        Logger.verification('Verificar que se muestra un mensaje de error indicado los campos ')
        SignupMethods.verifyThatThisUserAlreadyExistMessageIsDsiplayed();
        
    });


})