import config from '../config/config'


export default class RegistrationPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateToRegistrationPage() {
      await this.page.goto(config.baseUrl);
      await this.page.getByRole('button', { name: 'Sign up' }).click();
    }
  
    async enterFirstName(firstName) {
      await this.page.getByPlaceholder('First Name').fill(firstName);
    }
  
    async enterLastName(lastName) {
      await this.page.getByPlaceholder('Last Name').fill(lastName);
    }
  
    async enterEmail(email) {
      await this.page.getByPlaceholder('Email').fill(email);
    }
  
    async enterPassword(password) {
      await this.page.getByPlaceholder('Password').fill(password);
    }
  
    async clickSubmitButton() {
      await this.page.getByRole('button', { name: 'Submit' }).click();
    }
  
    async waitForContactListPage() {
      await this.page.waitForURL(config.baseUrl + "/contactList");
    }
  }
