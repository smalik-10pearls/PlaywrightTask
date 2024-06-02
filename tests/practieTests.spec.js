const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const BookstorePage = require('../pages/BookstorePage');
const testData = require('../data/testData.json');

let loginPage;
let bookPage;

test.describe('DemoQA website tests', () => {

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        bookPage = new BookstorePage(page);
        await page.goto('/');
    });

    test('Verification of user to login', async ({ page }) => {

        await loginPage.clickBookApp();
        await loginPage.clickLogin();
        await loginPage.enterCredentials(testData.username, testData.password);
        await loginPage.clickLoginButton();

        const logoutText = await loginPage.verifyLoggedIn();
        expect(logoutText).toContain("Log out");
        expect(logoutText).toBeTruthy();
    });

    test('Filter a book for reading', async ({ page }) => {
        await loginPage.clickBookApp();
        await loginPage.clickLogin();
        await loginPage.enterCredentials(testData.username, testData.password);
        await loginPage.clickLoginButton();
        await bookPage.enterTextInSearch(testData.book);

        const bookFilter = await bookPage.verifyBookInListing();
        expect(bookFilter).toContain(testData.book);
        expect(bookFilter).toBeTruthy();

    });

    test('Verification of user to logout', async ({ page }) => {
        await loginPage.clickBookApp();
        await loginPage.clickLogin();
        await loginPage.enterCredentials(testData.username, testData.password);
        await loginPage.clickLoginButton();
        await loginPage.clickLogoutButton();
        expect(page.url()).toContain('login');
    });

});