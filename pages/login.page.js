const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '//input[@name="username"]';
    this.passwordInput = '//input[@name="password"]';
    this.loginButton = '//button[@type="submit"]';
    this.dashboardMessage = '(//*[text()="Dashboard"])[2]';
    this.dashboard = '//div[@class="oxd-grid-3 orangehrm-dashboard-grid"]';
  }

  async goTo() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com');
  }

  async fillUsername(username) {
    await this.page.fill(this.usernameInput, username);
  }

  async fillPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLoginButton() {
    await this.page.click(this.loginButton);
  }

  async getDashboardMessage() {
    return await this.page.innerText(this.dashboardMessage);
  }

  async validateVisibleDashboard() {
    await expect(this.page.locator(this.dashboard)).toBeVisible();
  }

  async validateErrorMessage(errorMessage) {
    await expect(this.page.getByText(errorMessage)).toBeVisible();
  }
}

module.exports = LoginPage;
