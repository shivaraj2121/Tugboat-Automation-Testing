import {BrowserContext, ElementHandle, Page,} from '@playwright/test'



export default class Action  {
    
    static async openApplication(page,url)
    {

      await page.goto(url)
    }

    static async selectByText(page, selector, text) {
        await page.locator(selector).selectOption(text)
       
    }
    static async click(page, selector) {
     await page.click(selector);
   
    }

    static async type(page, selector: string, text) {
        await page.fill(selector,text);
        
    }

    static async waitForNavigation(page) {
        await page.waitForNavigation();
    }

    static async hover(page: Page, selector) {
        const element = page.locator(selector);
        await element.hover();
    }

    static async getElements(page: Page, selector): Promise<ElementHandle[]> {
        return page.$$(selector);
    }
   

    static async openNewTab(browserContext: BrowserContext): Promise<Page> {
        const page = await browserContext.newPage();
        return page;
       
    }
    static async switchToTab(page: Page, tabIndex: number): Promise<void> {
        const pages = page.context().pages();
        
        if (tabIndex < pages.length) {
            await pages[tabIndex].bringToFront();
            

        } 
    
    }
   static async clickOnTablerow( page,tableSelector, rowIndex, columnIndex) {
        await page.click(`${tableSelector} tbody tr(${rowIndex + 1}) tbody tr td(${columnIndex + 1})`);
    }
    static async fillquestions(page,tableid,index) {
        const questions = await page.locator(tableid)
       const questinRow= await questions.locator('tbody tr')
       const selectDropDown= questinRow.filter({
        
         has:page.locator('select')

       })
       await selectDropDown.selectOption('select',this.clickOnTablerow)

        
    }
    }