
import {test,expect} from "@playwright/test";
import login from "../Pages/loginPage"
import testData from "../testData.json"
test.skip('fill assessment',async({page})=>{
   
    await login.openURL(page,testData.url)
    await login.login(page,testData.username,testData.password)
    await expect(page.locator('id=Certification')).toHaveText('Certification History')
 })
    