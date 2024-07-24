const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const LoginPage = require('../pages/login.page');
const UserCreationPage = require('../pages/user_creation.page');
let loginPage
let userCreationPage
let fullNameNewEmployee = '';

Given('que el administrador ha iniciado sesión', async function () {
    loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.fillUsername('Admin');
    await loginPage.fillPassword('admin123');
    await loginPage.clickLoginButton();
});

Given('el administrador está en la sección de administración de usuarios', async function () {
    userCreationPage = new UserCreationPage(page);
    await userCreationPage.clickButtonByText('PIM');
});

When('el administrador hace click en {string}', async function (buttonText) {
    userCreationPage = new UserCreationPage(page);
    await userCreationPage.clickButtonByText(buttonText);
});

When('el administrador rellena el formulario con los siguientes datos', async function (dataTable) {
    const data = dataTable.hashes();

    for (const row of data) {
        userCreationPage = new UserCreationPage(page);
        await userCreationPage.fillEmployeeFirstName(row['First Name']);
        await userCreationPage.fillEmployeeMiddleName(row['Middle Name']);
        await userCreationPage.fillEmployeeLastName(row['Last Name']);
        fullNameNewEmployee = row['First Name'] + " " + row['Middle Name'] + " " + row['Last Name'];
        console.log("fullNameNewEmployee: " + fullNameNewEmployee);
    }
});

Then('valido se haya creado correctamente el empleado', async function () {
    userCreationPage = new UserCreationPage(page);
    await userCreationPage.validateMessage('Successfully Saved');
});

Given('el administrador busca el nuevo empleado', async function () {
    userCreationPage = new UserCreationPage(page);
    await userCreationPage.fillEmployeeFullName(fullNameNewEmployee);
    await userCreationPage.clickSearch();
});

Then('valido la existencia del empleado en la lista de empleados', async function () {
    userCreationPage = new UserCreationPage(page);
    await userCreationPage.validateFullNameInTable(fullNameNewEmployee);
});

Then('se muesta mensaje de error indicando que los campos son inválidos', async function () {
    userCreationPage = new UserCreationPage(page);
    await userCreationPage.validateMessage('Required');
});