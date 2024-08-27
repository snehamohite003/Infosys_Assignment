import { test, expect, type Page } from '@playwright/test';
require('dotenv').config();


let emailID=process.env.UserName;
let password=process.env.Password;
let invaliEmail="test1"

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.polestar.com/se');
    try {
      // Wait for the cookie pop-up to appear and click the accept button
      await page.waitForSelector('button.cookie-accept', { timeout: 5000 }); // Adjust selector and timeout as needed
      await page.click('button.cookie-accept');
    } catch (e) {
      console.log('Cookie pop-up did not appear.');
    }
    await page.locator("//button[@title='menu']").click();
    await page.locator("//a[@class='css-16ho8r3']").click();
  });

  test.describe('Verify Login Page Functionality with Email- Sanity test', () => {

    test('T001 Verify User is on login page', async ({ page }) => {
       
        await expect(page.getByRole('heading', { name: 'Inloggning' })).toBeVisible();
  });

  test('T001 Verify User Login Functionality when user Enter Valid Username and Password', async ({ page }) => {
    await page.locator("//div[@class='radio-group-container']/label[1]").click();
    await page.fill("//input[@id='email-username-field']", emailID);
    await page.fill("input[@id='password-field']", password);
    await page.locator("//button[@id='login-btn']").click();
    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
});


});


test.describe('Verify Login Page Functionality with Phone Number- Sanity test', () => {

    test('T001 Verify User is on login page', async ({ page }) => {
       
        await expect(page.getByRole('heading', { name: 'Inloggning' })).toBeVisible();
  });

  test('T001 Verify User Login Functionality when user Enter Invalid Username and Password', async ({ page }) => {
    await page.locator("//div[@class='radio-group-container']/label[1]").click();
    await page.fill("//input[@id='email-username-field']", invaliEmail);
    await page.fill("input[@id='password-field']", password);
    await page.locator("//button[@id='login-btn']").click();
    await expect(page.getByRole('heading', { name: 'Invalid Email/Password' })).toBeVisible();
});


});