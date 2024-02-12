import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ContactListPage from './ContactListPage';
import contactaddpage from './contactaddpage';
import contactdetalipage from './contactdetalipage';


export default class Actions {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.registrationPage = new RegistrationPage(page);
        this.contactListPage = new ContactListPage(page);
        this.contactaddpage = new contactaddpage(page);
        this.contactdetalipage = new contactdetalipage(page);
    }
  
    async registerAndLogin(firstName, lastName, email, password) {
      await this.registrationPage.navigateToRegistrationPage();
      await this.registrationPage.enterFirstName(firstName);
      await this.registrationPage.enterLastName(lastName);
      await this.registrationPage.enterEmail(email);
      await this.registrationPage.enterPassword(password);
      await this.registrationPage.clickSubmitButton();
      await this.registrationPage.waitForContactListPage();
    }
  
    async login(email, password) {
      await this.loginPage.navigateToLoginPage();
      await this.loginPage.enterEmail(email);
      await this.loginPage.enterPassword(password);
      await this.loginPage.clickSubmitButton();
      await this.loginPage.waitForContactListPage();
    }
  
    async logout() {
      await this.contactListPage.clickLogoutButton();
      await this.contactListPage.waitForHomePage();
    }
    async addContact(firstName, lastName, date, contactEmail, phone, street1, street2, city, state, zip, country) {
        await this.contactListPage.clickaddcontactButton();
        await this.contactaddpage.waitForContactaddPage();
        await this.contactaddpage.enterContactDetails(firstName, lastName, date, contactEmail, phone, street1, street2, city, state, zip, country);
        await this.contactaddpage.clickaddContactButton();
      }
      async deleteContact(firstName, lastName) {
        await this.contactListPage.clickContact(firstName, lastName);
        await this.contactdetalipage.waitForContactDetailsPage();
        await this.contactdetalipage.clickDeleteContactButton();
      }
  }
