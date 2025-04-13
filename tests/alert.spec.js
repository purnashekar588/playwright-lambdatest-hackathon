const { test, expect } = require('@playwright/test');
const { AlertsPage } = require('../pages/alertsPage');

test.describe('JavaScript Alerts', () => {
  test('Handle JS Alert', async ({ page }) => {
    const alert = new AlertsPage(page);
    await alert.goto();
    await alert.handleAlert();
    await expect(alert.resultText).toContainText('You successfully clicked an alert');
  });

  test('Handle JS Confirm (dismiss)', async ({ page }) => {
    const alert = new AlertsPage(page);
    await alert.goto();
    await alert.handleConfirm(false);
    await expect(alert.resultText).toContainText('You clicked: Cancel');
  });

  test('Handle JS Prompt with input', async ({ page }) => {
    const alert = new AlertsPage(page);
    await alert.goto();
    await alert.handlePrompt('QA Hackathon');
    await expect(alert.resultText).toContainText('You entered: QA Hackathon');
  });
});
