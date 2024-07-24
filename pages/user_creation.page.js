const { expect } = require('@playwright/test');

class UserCreationPage {
    constructor(page) {
        this.page = page;
        this.inputFirstName = 'input[name="firstName"]';
        this.inputMiddleName = 'input[name="middleName"]';
        this.inputLastName = 'input[name="lastName"]';
        this.inputFullName = '(//input[@placeholder="Type for hints..."])[1]';
        this.btnSubmit = '//button[@type="submit"]';
    }

    async clickButtonByText(buttonText) {
        await this.page.getByText(buttonText).click();
    }
    async clickSearch() {
        await this.page.click(this.btnSubmit);
    }
    async fillEmployeeFirstName(firstName) {
        await this.page.fill(this.inputFirstName, firstName);
    }

    async fillEmployeeMiddleName(middleName) {
        await this.page.fill(this.inputMiddleName, middleName);
    }

    async fillEmployeeLastName(lastName) {
        await this.page.fill(this.inputLastName, lastName);
    }

    async fillEmployeeFullName(fullName) {
        await this.page.fill(this.inputFullName, fullName);
    }

    async validateMessage(message) {
        await expect(this.page.getByText(message).first()).toBeVisible();
    }

    async validateFullNameInTable(fullName) {
        const nameParts = fullName.split(' '); // Divide el nombre completo en partes
    for (const part of nameParts) {
        const xpathSelector = `//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]//div[contains(text(), "${part}")]`;
        const locator = this.page.locator(xpathSelector);
        await expect(locator.first()).toBeVisible();
    }
    }
}

module.exports = UserCreationPage;