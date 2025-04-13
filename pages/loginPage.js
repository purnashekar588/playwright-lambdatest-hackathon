exports.LoginPage = class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.locator("//input[@id='username']")
      this.passwordInput = page.locator("//input[@id='password']");
      this.loginButton = page.locator('button[type="submit"]');
      this.successMsg = page.locator('.flash.success');
      this.errorMsg = page.locator('.flash.error');
    }
  
    async goto() {
      await this.page.goto('https://the-internet.herokuapp.com/login');
    }
  
    async login(username, password) { 
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  };
  