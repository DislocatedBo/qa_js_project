import config from "../config/config"
import {request} from "playwright/test"
import UserFixtureFunc from '../fixtures/UserFixture'

const registerUser = async ({ userName, password }) => {
const context = await request.newContext({
    
})

const response = await context.post(`${config.baseUrl}/register`, {
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
})

}

export default registerUser