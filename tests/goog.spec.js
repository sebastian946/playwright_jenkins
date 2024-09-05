const {test,expect} = require('@playwright/test');

test('Verify application Title', async function ({page}) {
    await page.goto('http://google.com');
    const title = await page.title();
    console.log(`This is the title ${title}`);
    await expect(page).toHaveTitle("Google");
})