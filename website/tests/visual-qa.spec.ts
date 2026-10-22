import { test, expect } from "@playwright/test";
const pages = [{path:"/",name:"home"},{path:"/products",name:"catalogue"},{path:"/products/basmati-rice",name:"product"},{path:"/quality",name:"quality"},{path:"/compliance",name:"compliance"},{path:"/contact",name:"enquiry"}];
for(const target of pages){
 test("capture visual QA for "+target.name,async({page},testInfo)=>{
   await page.goto(target.path);
   await expect(page.locator("main")).toBeVisible();
   await page.screenshot({path:testInfo.outputPath(target.name+".png"),fullPage:true,animations:"disabled"});
   const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);
   expect(overflow,"horizontal overflow "+target.path).toBe(false);
 });
}
test("keyboard access and privacy notice",async({page})=>{
 await page.goto("/contact");
 await expect(page.getByText(/does not transmit, save, or email/i)).toBeVisible();
 await page.keyboard.press("Tab");
 const focused=await page.evaluate(()=>document.activeElement?.tagName);
 expect(["A","BUTTON","INPUT","SELECT","TEXTAREA"]).toContain(focused);
});
