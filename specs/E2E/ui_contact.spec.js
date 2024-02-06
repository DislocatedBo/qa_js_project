import { test, expect } from '@playwright/test';
import config from '../../framework/config/config'
const { addContact } = require('../../framework/services/requestcontact');
const { loginUser } = require('../../framework/services/request');

test('test addcontact', async ({ page }) => {
    const firstname = config.firstname
    const lastname = config.lastname
    await page.goto(config.baseUrl);
    await page.getByPlaceholder('Email').fill(config.defemail);
    await page.getByPlaceholder('Password').fill(config.testpass);
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForURL(config.baseUrl + "/contactList")
    await page.getByRole('button', { name: 'Add a New Contact' }).click();
    await page.getByPlaceholder('First Name').fill(firstname);
    await page.getByPlaceholder('Last Name').fill(lastname);
    await page.getByPlaceholder('yyyy-MM-dd').fill(config.datebd);
    await page.getByPlaceholder('example@email.com').fill(config.email);
    await page.getByPlaceholder('8005551234').fill(config.phone);
    await page.getByPlaceholder('Address 1').fill(config.street);
    await page.getByPlaceholder('Address 2').fill(config.street);
    await page.getByPlaceholder('City').fill(config.city);
    await page.getByPlaceholder('State or Province').fill(config.state);
    await page.getByPlaceholder('Postal Code').fill(config.zip);
    await page.getByPlaceholder('Country').fill(config.country);
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.getByRole('cell', { name: firstname + ' ' + lastname })).toBeVisible();
    await page.waitForURL(config.baseUrl + "/contactList")
});

test('delete contact', async ({ page }) => {
    const firstname = config.firstname
    const lastname = config.lastname
    const loginResponse = await loginUser(config.defemail, config.testpass);
    await addContact(firstname, lastname, config.datebd, config.email, config.phone, config.street, config.street, config.city, config.state, config.zip, config.country, loginResponse.data.token)
    await page.goto(config.baseUrl);
    await page.getByPlaceholder('Email').fill(config.defemail);
    await page.getByPlaceholder('Password').fill(config.testpass);
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.waitForURL(config.baseUrl + "/contactList")
    await page.getByRole('cell', { name: firstname + ' ' + lastname }).click();
    await page.waitForURL(config.baseUrl + "/contactDetails")
    await page.getByRole('button', { name: 'Delete Contact' }).click();
    await expect(page.getByRole('cell', { name: firstname + ' ' + lastname })).toHaveCount(0);
});