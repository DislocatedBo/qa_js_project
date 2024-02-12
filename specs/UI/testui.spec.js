import { test, expect } from '@playwright/test';
const { addContact } = require('../../framework/services/requestcontact');
const { loginUser } = require('../../framework/services/request');
import config from '../../framework/config/config';
import Actions from '../../framework/pages/action';

test('test reg', async ({ page }) => {
  const actions = new Actions(page);
  await actions.registerAndLogin(config.firstname, config.lastname, config.email, config.password);
  await expect(page.getByRole('heading', { name: 'Contact List' })).toBeVisible();
});

test('test login ', async ({ page }) => {
  const actions = new Actions(page);
  await actions.login(config.defemail, config.testpass);
  await expect(page.getByRole('heading', { name: 'Contact List' })).toBeVisible();
});

test('test logout ', async ({ page }) => {
  const actions = new Actions(page);
  await actions.login(config.defemail, config.testpass);
  await actions.logout();
  await expect(page.getByRole('heading', { name: 'Contact List App' })).toBeVisible();
});

test('test add contact ', async ({ page }) => {
  const firstname = config.firstname
  const lastname = config.lastname
  const actions = new Actions(page);
  await actions.login(config.defemail, config.testpass);
  await actions.addContact(firstname, lastname, config.datebd, config.email, config.phone, config.street, config.street, config.city, config.state, config.zip, config.country);
  await expect(page.getByRole('cell', { name: firstname + ' ' + lastname })).toBeVisible();
  await page.waitForURL(config.baseUrl + "/contactList")
});

test('delete contact', async ({ page }) => {
  const actions = new Actions(page);
  const firstname = config.firstname;
  const lastname = config.lastname;
  const loginResponse = await loginUser(config.defemail, config.testpass);
  await addContact(firstname, lastname, config.datebd, config.email, config.phone, config.street, config.street, config.city, config.state, config.zip, config.country, loginResponse.data.token);
  await actions.login(config.defemail, config.testpass);
  await actions.deleteContact(firstname, lastname);
  await expect(page.getByRole('cell', { name: firstname + ' ' + lastname })).toHaveCount(0);
});
