import config from '../config/config'


export default class ContactDetailsPage {
    constructor(page) {
      this.page = page;
    }
  
    async waitForContactaddPage() {
      await this.page.waitForURL(config.baseUrl + "/addContact");
    }

    async enterContactDetails(firstName, lastName, date, contactEmail, phone, street1, street2, city, state, zip, country) {
      await this.page.getByPlaceholder('First Name').fill(firstName);
      await this.page.getByPlaceholder('Last Name').fill(lastName);
      await this.page.getByPlaceholder('yyyy-MM-dd').fill(date);
      await this.page.getByPlaceholder('example@email.com').fill(contactEmail);
      await this.page.getByPlaceholder('8005551234').fill(phone);
      await this.page.getByPlaceholder('Address 1').fill(street1);
      await this.page.getByPlaceholder('Address 2').fill(street2);
      await this.page.getByPlaceholder('City').fill(city);
      await this.page.getByPlaceholder('State or Province').fill(state);
      await this.page.getByPlaceholder('Postal Code').fill(zip);
      await this.page.getByPlaceholder('Country').fill(country);     
   }
  
    async clickaddContactButton() {
      await this.page.getByRole('button', { name: 'Submit' }).click();
    }
  }
