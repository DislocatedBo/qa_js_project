import config from '../config/config'

export default class ContactListPage {
    constructor(page) {
      this.page = page;
    }
  
    async waitForContactListHeader() {
      await this.page.waitForURL(config.baseUrl + "/contactList");
      await this.page.waitForSelector('h1');
    }
  
    async clickLogoutButton() {
      await this.page.getByRole('button', { name: 'Logout' }).click();
    }

    async clickaddcontactButton() {
        await this.page.getByRole('button', { name: 'Add a New Contact' }).click();
      }
  
    async waitForHomePage() {
      await this.page.waitForURL(config.baseUrl);
    }
    async clickContact(firstName, lastName) {
        await this.page.getByRole('cell', { name: firstName + ' ' + lastName }).click();;
      }
  }
