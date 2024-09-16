import actionHelper from "../Util/actionHelper"
import {locator} from "../Pages/loginLocator"
export default  new class LoginPage 

{
    async openURL(page,url)
    {
        await actionHelper.openApplication(page,url)
    }
    async login(page,username,password)
    {
        await actionHelper.click(page,locator.loginLink);
        await actionHelper.type(page,locator.UserName,username);
        await actionHelper.type(page,locator.passwordField,password);
        await actionHelper.click(page,locator.loginButton);
    }
}
