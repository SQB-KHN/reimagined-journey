import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
 testDir:"./tests",timeout:30000,retries:1,
 use:{baseURL:"http://127.0.0.1:3000",trace:"retain-on-failure"},
 projects:[{name:"chromium-desktop",use:{...devices["Desktop Chrome"]}},{name:"chromium-mobile",use:{...devices["iPhone 13"],defaultBrowserType:"chromium"}}],
 webServer:{command:"npm run start -- --hostname 127.0.0.1",url:"http://127.0.0.1:3000",reuseExistingServer:!process.env.CI,timeout:120000}
});