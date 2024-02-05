import config from "../../framework/config/config";
import UserFixtureFunc from "../../framework/fixtures/UserFixture";
import registerUser from "../../framework/services/RegisterService";
import {
  loginUser,
  restorePassword,
} from "../../framework/services/AuthService";

const { test, expect } = require("@playwright/test");
let password = UserFixtureFunc().generatePassword().build().Password
let email = UserFixtureFunc().generateEmail().build().Email
let firstName = UserFixtureFunc().generateFirstName().build().FirstName
let lastName = UserFixtureFunc().generateLastName().build().LastName
let rememberMe = false

test("New user succesfully registered", async ({ request }) => {
    const form = {
        __RequestVerificationToken: 'FGMkg8AFwiEok6J8j-7mbpGUJmC5v58I-8-w3OSjSYzZ7SUZh-gBT68qOLdwbGA5XnZwoiOh7zDc-x9DALG-_T7zp58fuOXjJP1OhNzHr5k1',
        Gender: 'M',
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        Password: password,
        ConfirmPassword: password,
        "register-button": "Register",
      }
      console.log('form1', form)
  const response = await request.post(`${config.baseUrl}/register`, {
    form: form
  });
  expect(response.status()).toBe(200);
});

test("succesfull login", async ({ request }) => {
  const form = {
    Email: email,
    Password: password,
    RememberMe: rememberMe,
  };
  console.log('form2', form)
  const response = await request.post(`${config.baseUrl}/login`, {
    form: form,
  });
  expect(response.status()).toBe(200);
});

test("unsuccesfull login (email=null)", async ({ request }) => {
  const form = {
    Email: null,
    Password: password,
    RememberMe: rememberMe,
  };
  console.log('form3', form);
  const response = await request.post(`${config.baseUrl}/login`, {
    form: form,
  });
  expect(response.status()).toBe(200);
});

test("unsuccesfull login (password=nul)", async ({ request }) => {
  const form = {
    Email: email,
    Password: null,
    RememberMe: rememberMe,
  };
  console.log('form4', form);
  const response = await request.post(`${config.baseUrl}/login`, {
    form: form,
  });
  expect(response.status()).toBe(200);
});

test("restore password", async ({ request }) => {
  const form = {
    Email: email,
    "send-email": "Recover",
  };
  console.log('form5', form);
  const response = await request.post(`${config.baseUrl}/passwordrecovery`, {
    form: form,
  });

  const body = await response.text();
  expect(response.status()).toBe(200);
  expect(body).toContain("Email not found");
});
