import { test, expect } from '@playwright/test';




test('student_register_01', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'ลงทะเบียน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล *' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล *' }).fill('นายภูวนาถ รักยิ่ง');
  await page.getByRole('textbox', { name: 'วันเดือนปีเกิด' }).fill('2003-01-07');
  await page.getByLabel('เพศ').selectOption('ชาย');
  await page.getByRole('textbox', { name: 'เลขบัตรประชาชน' }).click();
  await page.getByRole('textbox', { name: 'เลขบัตรประชาชน' }).fill('1328900019525');
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).click();
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).fill('31 หมู่ 3 ตำบล ตาตุม ');
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).click();
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).fill('31 หมู่ 3 ตำบล ตาตุม อำเภอ สังขะ จังหวัด สุรินทร์');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).click();
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0638149110');
  await page.getByRole('textbox', { name: 'อีเมล' }).click();
  await page.getByRole('textbox', { name: 'อีเมล' }).fill('poowanatrakying@gmail.com');
  await page.getByLabel('คณะ').selectOption('คณะเกษตรศาสตร์และเทคโนโลยี');
  await page.getByLabel('สาขา', { exact: true }).selectOption('เทคโนโลยีคอมพิวเตอร์');
  await page.getByLabel('สาขาวิชา').selectOption('วิทยาการคอมพิวเตอร์');
  await page.getByLabel('ระดับการศึกษา').selectOption('ปริญญาตรี');
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา *' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา *' }).fill('652221101234');
  await page.getByLabel('หลักสูตร', { exact: true }).selectOption('หลักสูตรวิทยาศาสตรบัณฑิต');
  await page.getByLabel('ประเภทหลักสูตร').selectOption('ปกติ');
  await page.getByLabel('ปีของหลักสูตร').selectOption('2565');
  await page.getByLabel('กลุ่มเรียน').selectOption('วคต652A.');
  await page.getByRole('spinbutton', { name: 'เกรดเฉลี่ยสะสม (GPA)' }).click();
  await page.getByRole('spinbutton', { name: 'เกรดเฉลี่ยสะสม (GPA)' }).fill('2.41');
  await page.getByLabel('ภาคการศึกษาแรกเข้า').selectOption('ภาคการศึกษาที่1');
  await page.getByRole('spinbutton', { name: 'ปีการศึกษาแรกเข้า (พ.ศ.)' }).click();
  await page.getByRole('spinbutton', { name: 'ปีการศึกษาแรกเข้า (พ.ศ.)' }).fill('2565');
  await page.getByRole('textbox', { name: 'ตั้งรหัสผ่าน *' }).click();
  await page.getByRole('textbox', { name: 'ตั้งรหัสผ่าน *' }).fill('123456789');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน *' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน *' }).fill('123456789');
  await page.getByRole('button', { name: 'ลงทะเบียน' }).click();
  await page.screenshot({ path: "test-results/student_register_01_input.png" });
  await page.screenshot({ path: "test-results/student_register_01_output.png", fullPage: true});
});

test('student_register_02', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'ลงทะเบียน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล *' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล *' }).fill('');
  await page.getByRole('textbox', { name: 'วันเดือนปีเกิด' }).fill('2003-01-07');
  await page.getByLabel('เพศ').selectOption('ชาย');
  await page.getByRole('textbox', { name: 'เลขบัตรประชาชน' }).click();
  await page.getByRole('textbox', { name: 'เลขบัตรประชาชน' }).fill('1328900019525');
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).click();
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).fill('31 หมู่ 3 ตำบล ตาตุม ');
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).click();
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).fill('31 หมู่ 3 ตำบล ตาตุม อำเภอ สังขะ จังหวัด สุรินทร์');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).click();
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0638149110');
  await page.getByRole('textbox', { name: 'อีเมล' }).click();
  await page.getByRole('textbox', { name: 'อีเมล' }).fill('poowanatrakying@gmail.com');
  await page.getByLabel('คณะ').selectOption('คณะเกษตรศาสตร์และเทคโนโลยี');
  await page.getByLabel('สาขา', { exact: true }).selectOption('เทคโนโลยีคอมพิวเตอร์');
  await page.getByLabel('สาขาวิชา').selectOption('วิทยาการคอมพิวเตอร์');
  await page.getByLabel('ระดับการศึกษา').selectOption('ปริญญาตรี');
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา *' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา *' }).fill('652221106666');
  await page.getByLabel('หลักสูตร', { exact: true }).selectOption('หลักสูตรวิทยาศาสตรบัณฑิต');
  await page.getByLabel('ประเภทหลักสูตร').selectOption('ปกติ');
  await page.getByLabel('ปีของหลักสูตร').selectOption('2565');
  await page.getByLabel('กลุ่มเรียน').selectOption('วคต652A.');
  await page.getByRole('spinbutton', { name: 'เกรดเฉลี่ยสะสม (GPA)' }).click();
  await page.getByRole('spinbutton', { name: 'เกรดเฉลี่ยสะสม (GPA)' }).fill('2.41');
  await page.getByLabel('ภาคการศึกษาแรกเข้า').selectOption('ภาคการศึกษาที่1');
  await page.getByRole('spinbutton', { name: 'ปีการศึกษาแรกเข้า (พ.ศ.)' }).click();
  await page.getByRole('spinbutton', { name: 'ปีการศึกษาแรกเข้า (พ.ศ.)' }).fill('2565');
  await page.getByRole('textbox', { name: 'ตั้งรหัสผ่าน *' }).click();
  await page.getByRole('textbox', { name: 'ตั้งรหัสผ่าน *' }).fill('123456789');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน *' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน *' }).fill('123456789');
  await page.getByRole('button', { name: 'ลงทะเบียน' }).click();
  await page.screenshot({ path: "test-results/student_register_02_input.png" });
  await page.screenshot({ path: "test-results/student_register_02_output.png", fullPage: true});
});

test('student_register_03', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'ลงทะเบียน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล *' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล *' }).fill('นายภูวนาถ รักยิ่ง');
  await page.getByRole('textbox', { name: 'วันเดือนปีเกิด' }).fill('2003-01-07');
  await page.getByLabel('เพศ').selectOption('ชาย');
  await page.getByRole('textbox', { name: 'เลขบัตรประชาชน' }).click();
  await page.getByRole('textbox', { name: 'เลขบัตรประชาชน' }).fill('1328900019525');
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).click();
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).fill('31 หมู่ 3 ตำบล ตาตุม ');
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).click();
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).fill('31 หมู่ 3 ตำบล ตาตุม อำเภอ สังขะ จังหวัด สุรินทร์');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).click();
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0638149110');
  await page.getByRole('textbox', { name: 'อีเมล' }).click();
  await page.getByRole('textbox', { name: 'อีเมล' }).fill('poowanatrakying@gmail.com');
  await page.getByLabel('คณะ').selectOption('คณะเกษตรศาสตร์และเทคโนโลยี');
  await page.getByLabel('สาขา', { exact: true }).selectOption('เทคโนโลยีคอมพิวเตอร์');
  await page.getByLabel('สาขาวิชา').selectOption('วิทยาการคอมพิวเตอร์');
  await page.getByLabel('ระดับการศึกษา').selectOption('ปริญญาตรี');
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา *' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา *' }).fill('');
  await page.getByLabel('หลักสูตร', { exact: true }).selectOption('หลักสูตรวิทยาศาสตรบัณฑิต');
  await page.getByLabel('ประเภทหลักสูตร').selectOption('ปกติ');
  await page.getByLabel('ปีของหลักสูตร').selectOption('2565');
  await page.getByLabel('กลุ่มเรียน').selectOption('วคต652A.');
  await page.getByRole('spinbutton', { name: 'เกรดเฉลี่ยสะสม (GPA)' }).click();
  await page.getByRole('spinbutton', { name: 'เกรดเฉลี่ยสะสม (GPA)' }).fill('2.41');
  await page.getByLabel('ภาคการศึกษาแรกเข้า').selectOption('ภาคการศึกษาที่1');
  await page.getByRole('spinbutton', { name: 'ปีการศึกษาแรกเข้า (พ.ศ.)' }).click();
  await page.getByRole('spinbutton', { name: 'ปีการศึกษาแรกเข้า (พ.ศ.)' }).fill('2565');
  await page.getByRole('textbox', { name: 'ตั้งรหัสผ่าน *' }).click();
  await page.getByRole('textbox', { name: 'ตั้งรหัสผ่าน *' }).fill('123456789');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน *' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน *' }).fill('123456789');
  await page.getByRole('button', { name: 'ลงทะเบียน' }).click();
  await page.screenshot({ path: "test-results/student_register_03_output.png" });
  await page.screenshot({ path: "test-results/student_register_03_Fulloutput.png", fullPage: true});
});

test('student_register_04', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'ลงทะเบียน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล *' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ-นามสกุล *' }).fill('นายภูวนาถ รักยิ่ง');
  await page.getByRole('textbox', { name: 'วันเดือนปีเกิด' }).fill('2003-01-07');
  await page.getByLabel('เพศ').selectOption('ชาย');
  await page.getByRole('textbox', { name: 'เลขบัตรประชาชน' }).click();
  await page.getByRole('textbox', { name: 'เลขบัตรประชาชน' }).fill('1328900019525');
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).click();
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).fill('31 หมู่ 3 ตำบล ตาตุม ');
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).click();
  await page.getByRole('textbox', { name: 'ที่อยู่ปัจจุบัน' }).fill('31 หมู่ 3 ตำบล ตาตุม อำเภอ สังขะ จังหวัด สุรินทร์');
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).click();
  await page.getByRole('textbox', { name: 'เบอร์โทรศัพท์' }).fill('0638149110');
  await page.getByRole('textbox', { name: 'อีเมล' }).click();
  await page.getByRole('textbox', { name: 'อีเมล' }).fill('poowanatrakying@gmail.com');
  await page.getByLabel('คณะ').selectOption('คณะเกษตรศาสตร์และเทคโนโลยี');
  await page.getByLabel('สาขา', { exact: true }).selectOption('เทคโนโลยีคอมพิวเตอร์');
  await page.getByLabel('สาขาวิชา').selectOption('วิทยาการคอมพิวเตอร์');
  await page.getByLabel('ระดับการศึกษา').selectOption('ปริญญาตรี');
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา *' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา *' }).fill('652221106666');
  await page.getByLabel('หลักสูตร', { exact: true }).selectOption('หลักสูตรวิทยาศาสตรบัณฑิต');
  await page.getByLabel('ประเภทหลักสูตร').selectOption('ปกติ');
  await page.getByLabel('ปีของหลักสูตร').selectOption('2565');
  await page.getByLabel('กลุ่มเรียน').selectOption('วคต652A.');
  await page.getByRole('spinbutton', { name: 'เกรดเฉลี่ยสะสม (GPA)' }).click();
  await page.getByRole('spinbutton', { name: 'เกรดเฉลี่ยสะสม (GPA)' }).fill('2.41');
  await page.getByLabel('ภาคการศึกษาแรกเข้า').selectOption('ภาคการศึกษาที่1');
  await page.getByRole('spinbutton', { name: 'ปีการศึกษาแรกเข้า (พ.ศ.)' }).click();
  await page.getByRole('spinbutton', { name: 'ปีการศึกษาแรกเข้า (พ.ศ.)' }).fill('2565');
  await page.getByRole('textbox', { name: 'ตั้งรหัสผ่าน *' }).click();
  await page.getByRole('textbox', { name: 'ตั้งรหัสผ่าน *' }).fill('');
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน *' }).click();
  await page.getByRole('textbox', { name: 'ยืนยันรหัสผ่าน *' }).fill('');
  await page.getByRole('button', { name: 'ลงทะเบียน' }).click();
  await page.screenshot({ path: "test-results/student_register_04_output.png" });
  await page.screenshot({ path: "test-results/student_register_04_Fulloutput.png", fullPage: true});
});


test('student_login_01', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'นักศึกษา เข้าถึงระบบแนะนำวิชาชีพ' }).nth(3).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).fill('652221106666');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/student_login_01_output.png" });
  await page.screenshot({ path: "test-results/student_login_01_Fulloutput.png", fullPage: true});
});

test('student_login_02', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'นักศึกษา เข้าถึงระบบแนะนำวิชาชีพ' }).nth(3).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).fill('');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/student_login_02_input.png" });
  await page.screenshot({ path: "test-results/student_login_02_output.png"});
});

test('student_login_03', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'นักศึกษา เข้าถึงระบบแนะนำวิชาชีพ' }).nth(3).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).fill('652221106666');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/student_login_03_input.png" });
  await page.screenshot({ path: "test-results/student_login_03_output.png"});
});

test('student_login_04', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'นักศึกษา เข้าถึงระบบแนะนำวิชาชีพ' }).nth(3).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).fill('');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/student_login_04_input.png" });
  await page.screenshot({ path: "test-results/student_login_04_output.png"});
});

test('student_login_05', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('652221106666');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/student_login_05_input.png" });
  await page.screenshot({ path: "test-results/student_login_05_output.png"});
});


test('teacher_login_01', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'อาจารย์ ดูข้อมูลนักศึกษา, จัดการรายวิชา' }).nth(3).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (เลขประจำตัวอาจารย์หรือ Username)' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (เลขประจำตัวอาจารย์หรือ Username)' }).fill('kannika_so');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/teacher_login_01_input.png" });
  await page.screenshot({ path: "test-results/teacher_login_01_output.png"});
});

test('teacher_login_02', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'อาจารย์ ดูข้อมูลนักศึกษา, จัดการรายวิชา' }).nth(3).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (เลขประจำตัวอาจารย์หรือ Username)' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (เลขประจำตัวอาจารย์หรือ Username)' }).fill('');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/teacher_login_02_input.png" });
  await page.screenshot({ path: "test-results/teacher_login_02_output.png"});
});

test('teacher_login_03', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'อาจารย์ ดูข้อมูลนักศึกษา, จัดการรายวิชา' }).nth(3).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (เลขประจำตัวอาจารย์หรือ Username)' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (เลขประจำตัวอาจารย์หรือ Username)' }).fill('kannika_so');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/teacher_login_03_input.png" });
  await page.screenshot({ path: "test-results/teacher_login_03_output.png"});
});

test('teacher_login_04', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'อาจารย์ ดูข้อมูลนักศึกษา, จัดการรายวิชา' }).nth(3).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (เลขประจำตัวอาจารย์หรือ Username)' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (เลขประจำตัวอาจารย์หรือ Username)' }).fill('');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/teacher_login_04_input.png" });
  await page.screenshot({ path: "test-results/teacher_login_04_output.png"});
});

test('teacher_login_05', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika_so');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/teacher_login_05_input.png" });
  await page.screenshot({ path: "test-results/teacher_login_05_output.png"});
});


test('admin_login_01', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal i').nth(2).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/admin_login_01_input.png" });
  await page.screenshot({ path: "test-results/admin_login_01_output.png"});
});

test('admin_login_02', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal i').nth(2).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/admin_login_02_input.png" });
  await page.screenshot({ path: "test-results/admin_login_02_output.png"});
});

test('admin_login_03', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal i').nth(2).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/admin_login_03_input.png" });
  await page.screenshot({ path: "test-results/admin_login_03_output.png"});
});

test('admin_login_04', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal i').nth(2).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/admin_login_04_input.png" });
  await page.screenshot({ path: "test-results/admin_login_04_output.png"});
});

test('admin_login_05', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.screenshot({ path: "test-results/admin_login_05_input.png" });
  await page.screenshot({ path: "test-results/admin_login_05_output.png"});
});


test('student_quiz_01', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'นักศึกษา เข้าถึงระบบแนะนำวิชาชีพ' }).nth(3).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).fill('652221106666');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: 'ทำแบบทดสอบ', exact: true }).click();
  await page.getByRole('link', { name: ' เริ่มทำแบบทดสอบ' }).click();
  await page.getByText('ใช่', { exact: true }).click();
  await page.getByRole('button', { name: ' ข้อต่อไป' }).click();
  await page.getByText('ไม่ใช่').click();
  await page.getByRole('button', { name: ' ข้อต่อไป' }).click();
  await page.getByText('ใช่', { exact: true }).click();
  await page.getByRole('button', { name: ' ข้อต่อไป' }).click();
  await page.getByText('ไม่ใช่').click();
  await page.getByRole('button', { name: ' ข้อต่อไป' }).click();
  await page.getByRole('button', { name: ' ข้อต่อไป' }).click();
  await page.getByText('ใช่', { exact: true }).click();
  await page.getByRole('button', { name: ' ข้อต่อไป' }).click();
  await page.getByText('ใช่', { exact: true }).click();
  await page.getByRole('button', { name: ' ข้อต่อไป' }).click();
  await page.getByText('ใช่', { exact: true }).click();
  await page.getByRole('button', { name: ' ข้อต่อไป' }).click();
  await page.getByText('ใช่', { exact: true }).click();
  await page.getByRole('button', { name: ' ข้อต่อไป' }).click();
  await page.screenshot({ path: "test-results/student_quiz_01_input.png" });
  await page.screenshot({ path: "test-results/student_quiz_01_output.png"});
});

test('student_quiz_02', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('นักศึกษา เข้าถึงระบบแนะนำวิชาชีพ').click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).fill('652221105555');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: 'ทำแบบทดสอบ', exact: true }).click();
  await page.screenshot({ path: "test-results/student_quiz_02_input.png" });
  await page.screenshot({ path: "test-results/student_quiz_02_output.png"});
});

test('student_quiz_03', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('นักศึกษา เข้าถึงระบบแนะนำวิชาชีพ').click();
  await page.getByRole('textbox', { name: 'รหัสนักศึกษา' }).fill('652221106666');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: 'ประวัติการทำแบบทดสอบ' }).click();
  await page.screenshot({ path: "test-results/student_quiz_03_input.png" });
  await page.screenshot({ path: "test-results/student_quiz_03_output.png"});
});


test('admin_GS_01', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('.user-type-card.admin > .user-type-icon').click();
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่ม & วิชา' }).click();
  await page.getByRole('textbox', { name: 'เช่น เทคโนโลยีสารสนเทศ' }).click();
  await page.getByRole('textbox', { name: 'เช่น เทคโนโลยีสารสนเทศ' }).fill('เทคนิคคอมพิวเตอร์');
  await page.locator('button[name="add_group"]').click();
  await page.screenshot({ path: "test-results/admin_GS_01_input.png" });
  await page.screenshot({ path: "test-results/admin_GS_01_output.png"});
});

test('admin_GS_02', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('.user-type-card.admin > .user-type-icon').click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่ม & วิชา' }).click();
  await page.locator('div:nth-child(4) > div:nth-child(2) > .btn.secondary').click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('เทคนิคคอมพิวเตอร์IT');
  await page.getByRole('button', { name: '💾 บันทึก' }).click();
  await page.screenshot({ path: "test-results/admin_GS_02_input.png" });
  await page.screenshot({ path: "test-results/admin_GS_02_output.png"});
});

test('admin_GS_03', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('.user-type-card.admin > .user-type-icon').click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่ม & วิชา' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#group-form').getByRole('link', { name: '🗑️' }).nth(3).click();
  await page.screenshot({ path: "test-results/admin_GS_03_input.png" });
  await page.screenshot({ path: "test-results/admin_GS_03_output.png"});
});

test('admin_GS_04', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('.user-type-card.admin > .user-type-icon').click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่ม & วิชา' }).click();
  await page.locator('#curriculum_select').selectOption('หลักสูตรวิทยาศาสตรบัณฑิต');
  await page.locator('#course_select').selectOption('166');
  await page.locator('select[name="group_id_for_subject"]').selectOption('3');
  await page.locator('button[name="add_subject"]').click();
  await page.screenshot({ path: "test-results/admin_GS_04_input.png" });
  await page.screenshot({ path: "test-results/admin_GS_04_output.png"});
});

test('admin_GS_05', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal i').nth(2).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่ม & วิชา' }).click();
  await page.getByRole('row', { name: '6. 20-406-031-406' }).getByRole('link').first().click();
  await page.getByRole('combobox').selectOption('3');
  await page.getByRole('button', { name: '💾 บันทึก' }).click();
  await page.screenshot({ path: "test-results/admin_GS_05_input.png" });
  await page.screenshot({ path: "test-results/admin_GS_05_output.png"});
});

test('admin_GS_06', async ({ page }) => {
   await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal i').nth(2).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่ม & วิชา' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('row', { name: '1. 20-406-031-406' }).getByRole('link').nth(1).click();
  await page.screenshot({ path: "test-results/admin_GS_06_input.png" });
  await page.screenshot({ path: "test-results/admin_GS_06_output.png"});
});


test('admin_question_01', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal i').nth(2).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการคำถาม' }).click();
  await page.getByRole('textbox', { name: 'พิมพ์/วางคำถามทีละบรรทัดที่นี่' }).click();
  await page.getByRole('textbox', { name: 'พิมพ์/วางคำถามทีละบรรทัดที่นี่' }).fill('คุณสนใจระบบเครือข่ายคอมพิวเตอร์ไหม');
  await page.locator('select[name="bulk_group_id"]').selectOption('2');
  await page.getByRole('button', { name: '➕ เพิ่มคำถาม' }).click();
  await page.screenshot({ path: "test-results/admin_question_01_input.png" });
  await page.screenshot({ path: "test-results/admin_question_01_output.png"});
});

test('admin_question_02', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('ผู้ดูแลระบบ', { exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการคำถาม' }).click();
  await page.getByRole('textbox', { name: 'พิมพ์/วางคำถามทีละบรรทัดที่นี่' }).click();
  await page.getByRole('textbox', { name: 'พิมพ์/วางคำถามทีละบรรทัดที่นี่' }).fill('คุณสนใจระบบเครือข่ายคอมพิวเตอร์ไหม');
  await page.getByRole('button', { name: '➕ เพิ่มคำถาม' }).click();
  await page.screenshot({ path: "test-results/admin_question_02_input.png" });
  await page.screenshot({ path: "test-results/admin_question_02_output.png"});
});

test('admin_question_03', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('.user-type-card.admin > .user-type-icon').click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการคำถาม' }).click();
  await page.getByRole('row', { name: '11. คุณสนใจระบบเครือข่ายคอมพิวเตอร์ไหม การจัดการข้อมูลและปัญญาประดิษฐ์ (Data' }).getByRole('link').click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('คุณสนใจระบบเครือข่ายคอมพิวเตอร์และกราฟิกไหม');
  await page.locator('select[name="group_id_for_question"]').selectOption('3');
  await page.getByRole('button', { name: '💾 บันทึกการแก้ไข' }).click();
});

test('admin_question_04', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('.user-type-card.admin > .user-type-icon').click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('12345678');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการคำถาม' }).click();
  await page.getByRole('row', { name: '31' }).getByRole('link').click();
  await page.getByRole('textbox').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: '🗑️ ลบคำถามนี้' }).click();
  await page.screenshot({ path: "test-results/admin_question_04_input.png" });
  await page.screenshot({ path: "test-results/admin_question_04_output.png"});
});


test('admin_SG_01', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('.user-type-card.admin > .user-type-icon').click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่มเรียน' }).click();
  await page.getByRole('button', { name: '+ เพิ่มกลุ่มเรียน' }).click();
  await page.locator('#gm_group_name').selectOption('วคต672A.');
  await page.locator('#gm_teacher_id').selectOption('31');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.screenshot({ path: "test-results/admin_SG_01_input.png" });
  await page.screenshot({ path: "test-results/admin_SG_01_output.png"});
});

test('admin_SG_02', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal i').nth(2).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่มเรียน' }).click();
  await page.getByRole('button', { name: '+ เพิ่มกลุ่มเรียน' }).click();
  await page.locator('#gm_curriculum').selectOption('');
  await page.locator('#gm_teacher_id').selectOption('31');
  await page.locator('#gm_group_name').selectOption('วคต652A.');
  await page.locator('#gm_group_name').selectOption('');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.getByRole('button', { name: 'ยกเลิก' }).click();
  await page.screenshot({ path: "test-results/admin_SG_02_input.png" });
  await page.screenshot({ path: "test-results/admin_SG_02_output.png"});
});

test('admin_SG_03', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('.user-type-card.admin > .user-type-icon').click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่มเรียน' }).click();
  await page.getByRole('button', { name: 'แก้ไข' }).click();
  await page.locator('#gm_curriculum').selectOption('หลักสูตรประกาศนียบัตรวิชาชีพชั้นสูง');
  await page.locator('#gm_group_name').selectOption('วคต673A.');
  await page.getByRole('button', { name: 'บันทึก' }).click();
  await page.screenshot({ path: "test-results/admin_SG_03_input.png" });
  await page.screenshot({ path: "test-results/admin_SG_03_output.png"});
});

test('admin_SG_04', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'ผู้ดูแลระบบ จัดการผู้ใช้, กำหนดค่าระบบ' }).nth(3).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่มเรียน' }).click();
  await page.locator('#curriculumSelect').selectOption('หลักสูตรประกาศนียบัตรวิชาชีพชั้นสูง');
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/groups_manage.php?cur=%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B2%E0%B8%A8%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B8%8A%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%AA%E0%B8%B9%E0%B8%87');
  await page.locator('.btn.danger').first().click();
  await page.locator('#delGroupModal').getByRole('button', { name: 'ลบ' }).click();
});

test('admin_SG_05', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'ผู้ดูแลระบบ จัดการผู้ใช้, กำหนดค่าระบบ' }).nth(3).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการกลุ่มเรียน' }).click();
  await page.locator('#curriculumSelect').selectOption('หลักสูตรวิทยาศาสตรบัณฑิต');
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/groups_manage.php?cur=%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%9A%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B8%B4%E0%B8%95');
  await page.getByRole('row', { name: 'วคต652A' }).getByRole('button').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('row', { name: '652221104444' }).getByRole('button').click();
  await page.screenshot({ path: "test-results/admin_SG_05_input.png" });
  await page.screenshot({ path: "test-results/admin_SG_05_output.png"});
});


test('admin_RT_01', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.locator('#login-modal div').filter({ hasText: 'ผู้ดูแลระบบ จัดการผู้ใช้, กำหนดค่าระบบ' }).nth(3).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการอาจารย์' }).click();
  await page.getByRole('link', { name: ' ลงทะเบียนอาจารย์ เพิ่มข้อมูลอาจารย์ใหม่ พร้อมตั้งค่าสิทธิ์การใช้งานเบื้องต้น' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (username)' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้ (username)' }).fill('T0011');
  await page.getByRole('textbox', { name: 'รหัสประจำตัวอาจารย์' }).click();
  await page.getByRole('textbox', { name: 'รหัสประจำตัวอาจารย์' }).fill('11112223');
  await page.getByRole('textbox', { name: 'ชื่อ - นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ - นามสกุล' }).fill('ภูวนาถ รักยิ่ง');
  await page.getByRole('textbox', { name: 'อีเมล (ภาษาอังกฤษเท่านั้น)' }).click();
  await page.getByRole('textbox', { name: 'อีเมล (ภาษาอังกฤษเท่านั้น)' }).fill('PhuEng@gmail.com');
  await page.getByRole('button', { name: 'บันทึกอาจารย์' }).click();
  await page.screenshot({ path: "test-results/admin_RT_01_input.png" });
  await page.screenshot({ path: "test-results/admin_RT_01_output.png"});
});

test('admin_RT_02', async ({ page }) => {
  await page.goto('https://computer.surin.rmuti.ac.th/aprdt/DT/%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B9%81%E0%B8%99%E0%B8%B0%E0%B8%99%E0%B8%B3%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%8A%E0%B8%B5%E0%B8%9E%E0%B9%80%E0%B8%A5%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%95%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B8%94%E0%B8%AA%E0%B8%B4%E0%B8%99%E0%B9%83%E0%B8%88/');
  await page.getByRole('link', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByText('ผู้ดูแลระบบ', { exact: true }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้' }).fill('kannika.se');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('123456789');
  await page.getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
  await page.getByRole('link', { name: ' จัดการอาจารย์' }).click();
  await page.getByRole('link', { name: ' ลงทะเบียนอาจารย์ เพิ่มข้อมูลอาจารย์ใหม่ พร้อมตั้งค่าสิทธิ์การใช้งานเบื้องต้น' }).click();
  await page.getByRole('textbox', { name: 'รหัสประจำตัวอาจารย์' }).click();
  await page.getByRole('textbox', { name: 'รหัสประจำตัวอาจารย์' }).fill('11112223');
  await page.getByRole('textbox', { name: 'ชื่อ - นามสกุล' }).click();
  await page.getByRole('textbox', { name: 'ชื่อ - นามสกุล' }).fill('ภูวนาถ รักบิ่ง');
  await page.getByRole('textbox', { name: 'อีเมล (ภาษาอังกฤษเท่านั้น)' }).click();
  await page.getByRole('textbox', { name: 'อีเมล (ภาษาอังกฤษเท่านั้น)' }).fill('PhuEng@gmail.com');
  await page.getByRole('button', { name: 'บันทึกอาจารย์' }).click();
  await page.screenshot({ path: "test-results/admin_RT_02_input.png" });
  await page.screenshot({ path: "test-results/admin_RT_02_output.png"});
});