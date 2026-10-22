import {test,expect} from "@playwright/test";
test("product page leads to enquiry with selected category",async({page})=>{
 await page.goto("/products/basmati-rice");
 await page.getByRole("link",{name:/Prepare an enquiry/i}).click();
 await expect(page.getByLabel("Rice category *")).toHaveValue("Basmati rice");
});
test("buyer creates accurate draft without sending data",async({page})=>{
 await page.goto("/contact");
 await page.getByLabel("Your name *").fill("Test Buyer");
 await page.getByLabel("Company *").fill("Sample Trading");
 await page.getByLabel("Email *").fill("buyer@example.org");
 await page.getByLabel("Rice category *").selectOption("Non-basmati rice");
 await page.getByLabel("Variety / grain identity *").fill("Sample variety");
 await page.getByLabel("Required quantity *").fill("12.5");
 await page.getByLabel("Unit *").selectOption("MT");
 await page.getByLabel("Destination / delivery point *").fill("Delhi, India");
 await page.getByLabel("Maximum moisture (%)").fill("13.5");
 await page.getByRole("button",{name:/Prepare enquiry draft/i}).click();
 const draft=page.getByLabel("Generated enquiry draft");
 await expect(draft).toContainText("Non-basmati rice");
 await expect(draft).toContainText("12.5 MT");
 await expect(draft).toContainText("Delhi, India");
 await expect(draft).toContainText("13.5");
 await expect(draft).toContainText("NOT SUBMITTED");
});
test("required fields prevent an incomplete draft",async({page})=>{
 await page.goto("/contact");
 await page.getByRole("button",{name:/Prepare enquiry draft/i}).click();
 await expect(page.getByLabel("Generated enquiry draft")).toHaveCount(0);
});
test("primary routes render and mobile layout does not overflow",async({page,isMobile})=>{
 for(const path of ["/","/products","/quality","/approach","/compliance","/insights","/contact"]){
  await page.goto(path);
  await expect(page.locator("main")).toBeVisible();
  if(isMobile){const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth+1);expect(overflow, "overflow at "+path).toBeFalsy();}
 }
});