import config from '../config/config'


export default class ContactDetailsPage {
    constructor(page) {
      this.page = page;
    }
  
    async waitForContactDetailsPage() {
        await this.page.waitForURL(config.baseUrl + "/contactDetails")
    }
  
    async clickDeleteContactButton() {
      await this.page.getByRole('button', { name: 'Delete Contact' }).click();
    }
  
    async waitForContactDeleted(firstname, lastname) {
      await this.page.waitForSelector(`[aria-label="${firstname} ${lastname}"]`, { state: 'hidden' });
    }
  }
