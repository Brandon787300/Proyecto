import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.autenticaicon, ()=>{
    it('Inicio de sesion válido', ()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMethods.clickLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña validos')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword(LoginData.validCredentials.password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para inicar sesión')
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que se redirige al usuario a la pagina de inicio') 
        CommonPageMethods.verifySignedUser(LoginData.validCredentials.username)

        //Cerrar sesion 
        Logger.postCondition('Log out')
        CommonPageMethods.logout();
       
    })

    it('Inicio de sesion inválido', ()=>{
        Logger.stepNumber(1)
        Logger.step("Navegar a la página de inicio")
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMethods.clickLoginOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña invalidos')
        LoginMethods.insertUsername(LoginData.validCredentials.username)
        LoginMethods.insertPassword('Contraseña invalida')

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para inicar sesión')
        LoginMethods.clickOnLoginButton();
        Logger.verification('Verificar que muestre un mensaje de error indicando que el inicio de sesion ah fallado') 
        LoginMethods.verifyWronPasswordMessage();

    })

})