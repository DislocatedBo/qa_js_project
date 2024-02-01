import config from '../../framework/config/config';
import UserFixtureFunc from '../../framework/fixtures/UserFixture';
import registerUser from '../../framework/services/RegisterService';
import loginUser from '../../framework/services/AuthService';



const { test, expect } = require('@playwright/test');

test('test register', async ({ request }) => {
    const response = await request.post(`${config.baseUrl}/register`, {
        form: {
            "__RequestVerificationToken": UserFixtureFunc.token,
            "Gender": UserFixtureFunc.Gender,
            "FirstName": UserFixtureFunc.FirstName,
            "LastName": UserFixtureFunc.LastName,
            "Email": UserFixtureFunc.Email,
            "Password": UserFixtureFunc.Password,
            "ConfirmPassword": UserFixtureFunc.Password,
            "register-button": "Register"
        }
    });
    expect(response.status()).toBe(200);
});

test('succesfull login', async ({ request }) => {
    const response = await request.post(`${config.baseUrl}/login`, {
        form: {
            "Email": UserFixtureFunc.Email,
            "Password": UserFixtureFunc.Password,
            "RememberMe": UserFixtureFunc.RememberMe
        }
    });
    expect(response.status()).toBe(200);
});










