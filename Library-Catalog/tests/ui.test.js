const { test, expect} = require('@playwright/test');

test('Verify "All Books" link is visible', async ({page}) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isLinkVisible = await allBooksLink.isVisible();
    expect(isLinkVisible).toBe(true);
});

test('Verify "Login" button is visible', async ({page}) => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('nav.navbar');

    const loginButton = await page.$('#guest > a:nth-child(1)');
    const isVisibleLoginButton = await loginButton.isVisible();
    expect(isVisibleLoginButton).toBe(true);
});

test('Verify "All Books" link is visible after user login', async ({page}) => {
    await page.goto('http://localhost:3000/login');

    await page.fill('input[name="email"]', 'peter@abv.bg');
    await page.fill('input[name="password"]', '123456');
    await page.click('input[type="submit"]');

    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBooksLinkVisible = await allBooksLink.isVisible();

    expect(isAllBooksLinkVisible).toBe(true);
});