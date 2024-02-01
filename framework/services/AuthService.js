import config from "../config/config"
import {request} from "playwright/test"
import UserFixtureFunc from '../fixtures/UserFixture'
import exp from "constants"

const loginUser = async ({ userName, password }) => {
const context = await request.newContext({
    
})

const response = await context.post(`${config.baseUrl}/login`, {
    form: {
        "Email": UserFixtureFunc.Email,
        "Password": UserFixtureFunc.Password,
        "RememberMe": UserFixtureFunc.RememberMe
    }
})
}

export default loginUser