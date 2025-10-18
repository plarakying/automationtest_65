import { test, expect } from '@playwright/test';

// ชื่อเรื่อง: ทดสอบการเปิดหน้า Facebook
test('facebook', async ({ page }) => {
await page.goto('https://www.facebook.com/');


// await page.getByRole('button', { name: 'Log in' }).click();

//await page.getByRole('button', { name: 'Create new account' }).click();

//await page.getByRole('textbox', { name: 'Email address or phone number' }).fill('amitta@gmail.com');
//await page.getByRole('textbox', { name: 'Password' }).fill('123456');
//await page.getByRole('button', { name: 'Log in' }).click();


});

test('ess', async ({ page }) => {
await page.goto('https://computer.surin.rmuti.ac.th/computer/?fbclid=IwY2xjawMeBQxleHRuA2FlbQIxMABicmlkETFGRmNobzk3SE96em1HUmRTAR6Bc4uh8bIi0B0V4tmRm_Ck65vgkzNnsE0B90U2s8Fk1jmloHzzHeu04Hc7cg_aem_K5y3ILtHdod9SRAPy07MMw');

await expect(page.getByText('บุคลากร')).toBeVisible();


await expect(page.locator('xpath=//*[@id="header"]/div[3]')).toBeVisible();

//*[@id="header"]/div[3]

});

test("facebook_register", async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByRole("button", { name: 'Create new account' }).click();
  await page.getByRole("textbox", { name: "First name" }).fill("amitta");
  await page.getByRole("textbox", { name: "Surname" }).fill("pachuen");
  await page.getByRole("combobox", { name: "Day" }).selectOption("10");
  await page.getByRole("combobox", { name: "Month" }).selectOption("5");
  await page.getByRole("combobox", { name: "Year" }).selectOption("2004");
  await page.getByRole("radio", { name: "Female" }).check();
  await page.getByRole("textbox", { name: "Mobile number or email address" }).fill("amitta@gmail.com");
  await page.getByRole("textbox", { name: "New password" }).fill("password123");
  await page.getByRole("button", { name: "Sign Up" }).click();
});

test("computer_surin01", async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/#');
  await page.getByRole("link", { name: 'สมัครสมาชิก' }).click();
  await page.getByRole("textbox", { name: "ชื่อ", exact: true }).fill("amitta");
  await page.getByRole("textbox", { name: "นามสกุล", exact: true }).fill("pachuen");
  await page.getByRole("textbox", { name: "ชื่อผู้ใช้", exact: true }).fill("amitta01");
  await page.getByRole("textbox", { name: "รหัสผ่าน", exact: true }).fill("password123");
  await page.getByRole("textbox", { name: "ยืนยันรหัสผ่าน", exact: true }).fill("password123");
  await page.getByRole("textbox", { name: "เบอร์โทรศัพท์", exact: true }).fill("0123456789");
  await page.getByRole("textbox", { name: "อีเมล", exact: true }).fill("amitta@gmail.com");
  await page.getByRole("button", { name: "สมัครสมาชิก" }).click();

});


test("computer_surin02", async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/#');
  await page.getByRole("link", { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole("textbox", { name: "ชื่อผู้ใช้"}).fill("amitta01");
  await page.getByRole("textbox", { name: "รหัสผ่าน"}).fill("password123");
  await page.getByRole("button", { name: "เข้าสู่ระบบ" }).click();
  
//await expect(page.getByText('กลุ่มวิชาเรียนทั้งหมด')).toBeVisible();
await expect.soft(page.getByText('กลุ่มวิชาเรียนทั้งหมด')).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/sc/fornend/#');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('amitta01');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('password123');
  await page.getByRole('button', { name: ' เข้าสู่ระบบ' }).click();
  await expect(page.getByRole('heading', { name: 'คอร์สเรียนทั้งหมด' })).toBeVisible();
});








