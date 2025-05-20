import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { SignupMethods } from "../pages/singup/signup.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.regsitroYAutenticacion, ()=>{
    it('Registro de usuario válido', ()=>{

        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        //-----------------------------------------
        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.clickSingUpOption();

        //-----------------------------------------
        Logger.stepNumber(3)
        Logger.step('Hacer click en "Sign up" en la barra de navegación')
        SignupMethods.insertUsername("qwerty")
        SignupMethods.insertPassword("qwerty")

        //-----------------------------------------
        Logger.stepNumber(4)
        Logger.step('Hacer click en "Sign up en la barra de navegación"')
        SignupMethods.clickSignupButton();
        Logger.verification('Verificar que se muestre el mensaje "Sign up succesful"')
        SignupMethods.verifySignupSuccesfulMessageDisplayed();


    });


})