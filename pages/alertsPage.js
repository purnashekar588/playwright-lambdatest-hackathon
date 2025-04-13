exports.AlertsPage = class AlertsPage {
    constructor(page) {
      this.page = page;
      this.alertButton = page.locator('text=Click for JS Alert');
      this.confirmButton = page.locator('text=Click for JS Confirm');
      this.promptButton = page.locator('text=Click for JS Prompt');
      this.resultText = page.locator('#result');
    }
  
    async goto() {
      await this.page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    }
  
    async handleAlert() {
      this.page.once('dialog', async dialog => await dialog.accept());
      await this.alertButton.click();
    }
  
    async handleConfirm(accept = true) {
      this.page.once('dialog', async dialog => accept ? dialog.accept() : dialog.dismiss());
      await this.confirmButton.click();
    }
  
    async handlePrompt(inputText = 'Playwright') {
      this.page.once('dialog', async dialog => await dialog.accept(inputText));
      await this.promptButton.click();
    }
  };
  