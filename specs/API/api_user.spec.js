const { test, expect } = require('@playwright/test');
const { registerUser, loginUser, updateUser, logoutUser, delUser } = require('../../framework/services/request');
import config from '../../framework/config/config'

test('User Registration', async ({ request }) => {
  const registrationResponse = await registerUser(config.firstname, config.lastname, config.email, config.password);
  expect(registrationResponse.status).toBe(201);
});

test('User Registration bad e-mail', async ({ request }) => {
 const registrationResponse = await registerUser(config.firstname, config.lastname, config.defemail, config.password);
 expect(registrationResponse.status).toBe(400);
 expect(registrationResponse.data.message).toBe("Email address is already in use");
});

test('User login', async ({ request }) => {
  const loginResponse = await loginUser(config.defemail, config.testpass);
  expect(loginResponse.status).toBe(200);
  expect(loginResponse.data.user.firstName).toBe("test");
  expect(loginResponse.data.user.lastName).toBe("test");
});

test('update user', async ({ request }) => {
  const firstname = config.firstname
  const lastName = config.lastname
  const email = config.email
  const password = config.password
  await registerUser(firstname, lastName, email, password);
  const loginResponse = await loginUser(email, password);
  const updateResponse = await updateUser("test", "test", email, "12334567", loginResponse.data.token)
  expect(updateResponse.status).toBe(200);
  expect(updateResponse.data.firstName).toBe("test");
  expect(updateResponse.data.lastName).toBe("test");
  expect(updateResponse.data.email).toBe(email.toLowerCase());
});

test('User logout', async ({ request }) => {
  const loginResponse = await loginUser(config.defemail, config.testpass);
  const logountResponse = await logoutUser(loginResponse.data.token)
  expect(logountResponse.status).toBe(200);
});
test('User DELETE', async ({ request }) => {
  const firstname = config.firstname
  const lastName = config.lastname
  const email = config.email
  const password = config.password
  await registerUser(firstname, lastName, email, password);
  const loginResponse = await loginUser(email, password);
  const deleteResponse = await delUser(loginResponse.data.token)
  expect(deleteResponse.status).toBe(200);
});