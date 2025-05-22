import { CartMethods } from "../pages/cart/cart.methods";
import { CommonPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from "../pages/common-page/common-page.methods";
import { HomeMethods } from "../pages/home/home.methods";
import { LoginData } from "../pages/login/login.data";
import { LoginMethods } from "../pages/login/login.methods";
import { ProductDetailsElements } from "../pages/product-details/product-details.elements";
import { ProducDetailMethods } from "../pages/product-details/product-details.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredentials.username;
const password = LoginData.validCredentials.password;

const product = 'ASUS Full HD';

describe(CommonPageData.testSuites.catalogoYCompras, ()=>{

    it('Navegacion por categorias', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesion como usuario registrado')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickLoginOption();
        LoginMethods.login(user, password)
        //----------------------------------------------------

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption();
        //----------------------------------------------------

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegacion')
        HomeMethods.clickOnMonitorsOption();
        Logger.verification('Verificar que se muestra la lista de productos correspondientes a la categoria seleccionada')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')
    })

    it('Agregar al producto al carrito', ()=>{
        Logger.stepNumber(1)
        Logger.step('Iniciar sesion como usuario registrado')
        Logger.subStep('Navegate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickLoginOption();
        LoginMethods.login(user, password)
        //----------------------------------------------------

        Logger.stepNumber(2)
        Logger.step('Navegar a la pagina de inicio')
        CommonPageMethods.clickOnHomeOption();
        //----------------------------------------------------

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegacion')
        HomeMethods.clickOnMonitorsOption();
        //----------------------------------------------------
        
        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico')
        HomeMethods.clickProductLink(product)
        //----------------------------------------------------
        
        Logger.stepNumber(5)
        Logger.verification('Verificar que se muestre la página de detalles de producto')
        ProducDetailMethods.verifyProductDetailIsDisplayed();
        //----------------------------------------------------

        Logger.stepNumber(6)
        Logger.verification('Hacer clic en el bóton "Add to cart"')
        ProducDetailMethods.clickOnAddToCartButton();
        //----------------------------------------------------
        
        Logger.stepNumber(7)
        Logger.verification('Verificar que se muestra un mensaje de confirmacion y el producto se agrega al carrito')
        ProducDetailMethods.verifyPorductAddedMessage();
        CommonPageMethods.clickCartOption();
        CartMethods.verifyProductAdded(product)


    })
    

})