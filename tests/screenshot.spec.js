import { test, expect } from '@playwright/test';

test('screenshot', async ({ page }) => {
    await page.goto('https://www.instagram.com/');
    //คำสั่งในการถ่ายภาพหน้าจอ
    await page.screenshot({ path: "screenshot/instagram.png" });
    await page.getByRole('link', { name: "Forgot password" }).click();
    await page.screenshot({ path: "test-results/screenshot2.png", fullPage: true });

});

test('kmutnb', async ({ page }) => {
    await page.goto('https://www.kmutnb.ac.th/');
    await page.screenshot({ path: "test-results/ss1.png" });
    await page.screenshot({ path: "test-results/ss2.png", fullPage: true});
    await page.locator("header").screenshot({ path: "test-results/ss3.png" });
});


test('chula', async ({ page }) => {
    await page.goto('https://www.chula.ac.th/');
    await page.screenshot({ path: "test-results/ss1.png" });
    await page.screenshot({ path: "test-results/ss2.png", fullPage: true});
    await page.locator("footer").screenshot({ path: "test-results/ss4.png" });
    // ถ้าระบุตำแหน่งตาม class หรือ id ต้องใส่ . หรือ #
    await page.locator(".site-main").screenshot({ path: "test-results/ss6.png" });
});

test('chula1', async ({ page }) => {
    await page.goto('https://www.chula.ac.th/');
    
});

//test('facebook', async ({ page }) => {
  //await page.goto('https://www.facebook.com/');
  //await page.getByTestId('open-registration-form-button').click();
  //await page.getByRole('textbox', { name: 'First name' }).click();
  //await page.getByRole('textbox', { name: 'First name' }).fill('Phuvanat');
  //await page.getByRole('textbox', { name: 'Surname' }).click();
  //await page.getByRole('textbox', { name: 'Surname' }).fill('Rakying');
  //await page.getByLabel('Day').selectOption('7');
  //await page.getByLabel('Month').selectOption('1');
  //await page.getByLabel('Year').selectOption('2003');
  //await page.getByText('male').click();
  //await page.getByRole('textbox', { name: 'Mobile number or email address' }).click();
  //await page.getByRole('textbox', { name: 'Mobile number or email address' }).fill('poowanatrakying@gamil.com');
  //await page.getByRole('textbox', { name: 'New password' }).click();
  //await page.getByRole('textbox', { name: 'New password' }).fill('123456');
//});