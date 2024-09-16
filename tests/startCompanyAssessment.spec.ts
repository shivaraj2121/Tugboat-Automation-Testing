import loginPage from "../Pages/loginPage";
import{test} from '@playwright/test'
import  testData from '../testData.json'
import CompanyBackground from "../Pages/companyBackground";
import companyBackground from "../Pages/companyBackground";


test('CompanyBackground assessment',async ({page})=>{
await loginPage.openURL(page,testData.url)
await loginPage.login(page,testData.username,testData.password)
await CompanyBackground.startCompanyAssessment(page)
await companyBackground.HowLongHasTheCompanyBeenInBusiness(page,"21")
await companyBackground.whatBestDescribesTheCompanysIndustrySector(page,'Advertising & Marketing')
await companyBackground.Howmanyemployeesdoesthecompanyhave(page,"11")
await companyBackground.WhichOneOfTheChoicesListedBestDescribesTheCompanysPrimaryRevenue(page,'Do not know')
await companyBackground.Whathasbeenthecompanyaverageannualrevenuegrowthrateoverthepast10years(page,"44")

})