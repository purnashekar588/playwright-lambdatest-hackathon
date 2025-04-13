const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const creds = require('../utils/credentials');

test.describe('Login Tests', () => {
  test('Valid login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(creds.validUsername, creds.validPassword);
    await expect(login.successMsg).toContainText('You logged into a secure area!');
  });

  test('Invalid login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(creds.invalidUsername, creds.invalidPassword);
    await expect(login.errorMsg).toContainText('Your username is invalid!');
  });
});
