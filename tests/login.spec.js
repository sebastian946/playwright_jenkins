const {test,expect} = require('@playwright/test');

const url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

test('Valid login', async function ({page}) {
    await page.goto(url);
    await page.locator('//input[@name="username"]').type('Admin');
    await page.getByRole('textbox',{name:'Password'}).type('admin123');
    await page.getByRole('button',{name:'Login'}).click();

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText('profile picture').first().click();
    await page.getByRole('menuitem',{name:'Logout'}).click();
    await expect(page).toHaveURL(/login/);
});

test('Invalid login', async function ({page}) {
    await page.goto(url);
    await page.locator('//input[@name="username"]').type('Admin1');
    await page.getByRole('textbox',{name:'Password'}).type('admin123');
    await page.getByRole('button',{name:'Login'}).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
})
