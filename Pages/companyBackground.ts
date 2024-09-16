import Action from "../Util/actionHelper"
import {locator} from '../Pages/companyBackgroundLocators'


export default new class CompanyBackground{

   async startCompanyAssessment(page,){
    await Action.click(page,locator.startCompanyBackground)
   }
   async whatBestDescribesTheCompanysIndustrySector(page,text){
    await Action.selectByText(page,locator.Whatbestdescribesthecompanysindustrysector,text)
   }
   async HowLongHasTheCompanyBeenInBusiness(page,numberofyear){
    await Action.type(page,locator.Howlonghasthecompanybeeninbusiness,numberofyear)
   }
   async Howmanyemployeesdoesthecompanyhave(page,numberOfEmpy){
    await Action.type(page,locator.Howmanyemployeesdoesthecompanyhave,numberOfEmpy)
   }
   async Whathasbeenthecompanyaverageannualrevenuegrowthrateoverthepast10years(page,number){
    await Action.type(page,locator.Whathasbeenthecompanyaverageannualrevenuegrowthrateoverthepast10years,number)
   }
   async WhichOneOfTheChoicesListedBestDescribesTheCompanysPrimaryRevenue(page,option){
    await Action.selectByText(page,locator.WhichOneOfTheChoicesListedBestDescribesTheCompanysPrimaryRevenue,option)
   }

   


}