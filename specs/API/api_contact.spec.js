const { test, expect } = require('@playwright/test');
const { addContact, getContact, delContact } = require('../../framework/services/requestcontact');
const { loginUser } = require('../../framework/services/request');
import config from '../../framework/config/config'

test('add contact', async ({ request }) => {
    const loginResponse = await loginUser(config.defemail, config.testpass);
    const contactResponse = await addContact(config.firstname, config.lastname, config.datebd, config.email, config.phone, config.street, config.street, config.city, config.state, config.zip, config.country, loginResponse.data.token)
    expect(contactResponse.status).toBe(201);
});
test('get contact', async ({ request }) => {
    const loginResponse = await loginUser(config.defemail, config.testpass);
    const contactResponse = await addContact(config.firstname, config.lastname, config.datebd, config.email, config.phone, config.street, config.street, config.city, config.state, config.zip, config.country, loginResponse.data.token)
    const getcontactResponse = await getContact(loginResponse.data.token, contactResponse.data._id)
    expect(getcontactResponse.data._id).toBe(contactResponse.data._id);
    expect(getcontactResponse.status).toBe(200);
});
test('delete contact', async ({ request }) => {
    const loginResponse = await loginUser(config.defemail, config.testpass);
    const contactResponse = await addContact(config.firstname, config.lastname, config.datebd, config.email, config.phone, config.street, config.street, config.city, config.state, config.zip, config.country, loginResponse.data.token)
    const delcontactResponse = await delContact(loginResponse.data.token, contactResponse.data._id)
    expect(delcontactResponse.status).toBe(200);
});
