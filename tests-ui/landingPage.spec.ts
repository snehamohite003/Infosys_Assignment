import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.polestar.com/se');
  try {
    // Wait for the cookie pop-up to appear and click the accept button
    await page.waitForSelector('button.Accept All Cookies', { timeout: 5000 }); // Adjust selector and timeout as needed
    await page.click('button.Accept All Cookies');
  } catch (e) {
    console.log('Cookie pop-up did not appear.');
  }
});
   //code is to handle cookies pop-up
  // const popupPromise = page.waitForEvent('popup');
  // const popup = await popupPromise;
  // // Interact with the new popup normally.
  // await popup.getByRole('button', { name: 'Accept All Cookies' }).click();
  // Click the read
  // await page.getByRole('header', { name: 'Accept All Cookies' }).click();

test.describe('Polestar Automation Script- Sanity Test Landing Page', () => {

  test('T001 Verify landing page', async ({ page }) => {
  await expect(page).toHaveTitle("Polestar – Elbilar | Polestar Sverige");
});

  test('T002 Verify User page when user click on Discover button', async ({ page }) => {
   test.setTimeout(10000);

  await page.locator("(//div[@class='css-1ckl8y4'])[1]").click();
  await expect(page.getByRole('heading', { name: 'Polestar 3' })).toBeVisible();
  });


   test('T003 Verify User page when user click on Book test drive link', async ({ page }) => {
   
   await page.locator("(//a[@id='dlHQDWeWQZaIAaoLMmhnZw'])").click();
   await expect(page.getByRole('heading', { name: 'Boka en provkörning' })).toBeVisible();
   });

   test('T004 Verify When user click on Login button', async ({ page }) => {
   
    await page.locator("//button[@title='menu']").click();
    await page.locator("//a[@class='css-16ho8r3']").click();
    await expect(page.getByRole('heading', { name: 'Inloggning' })).toBeVisible();
    });
});

