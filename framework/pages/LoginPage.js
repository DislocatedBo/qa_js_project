import config from '../config/config'


export default class LoginPage {
    constructor(page) {
      this.page = page;
    }
  
    async navigateToLoginPage() {
      await this.page.goto(config.baseUrl);
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
