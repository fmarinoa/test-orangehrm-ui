const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page');
let loginPage

Given('que el usuario está en la página de login', async function () {
  loginPage = new LoginPage(page);
  await loginPage.goTo();
});

When('el usuario ingresa {string} en el campo de nombre de usuario', async function (username) {
  loginPage = new LoginPage(page);
  await loginPage.fillUsername(username);
});

When('el usuario ingresa {string} en el campo de contraseña', async function (password) {
  loginPage = new LoginPage(page);
  await loginPage.fillPassword(password);
});

When('el usuario hace clic en el botón de {string}', async function (buttonText) {
  if (buttonText === 'Login') {
    loginPage = new LoginPage(page);
    await loginPage.clickLoginButton();
  }
});

Then('el usuario debería ver el dashboard', async function () {
  loginPage = new LoginPage(page);
  await loginPage.validateVisibleDashboard();
  const welcomeMessage = await loginPage.getDashboardMessage();
  expect(welcomeMessage).toContain('Dashboard');
});

Then('el usuario debería ver un mensaje de error indicando {string}', async function (errorMessage) {
  loginPage = new LoginPage(page);
  await loginPage.validateErrorMessage(errorMessage);
});
