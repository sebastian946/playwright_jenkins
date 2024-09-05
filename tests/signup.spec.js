const {test,expect} = require('@playwright/test');

test('Validate dropdown', async function ({page}) {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    await page.getByRole('textbox',{name:'Name'}).fill('armando');
    await page.getByRole('textbox',{name:'Email'}).fill('armando@gmail.com');
    await page.locator('//input[@name="password"]').fill('12345.Armando');

    const elements = await page.locator('//div[@class="interest-div"]').all();

})