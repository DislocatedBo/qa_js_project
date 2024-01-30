import config from '../../framework/config/config';
import UserFixtureFunc from '../../framework/fixtures/UserFixture';



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

