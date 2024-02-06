import config from "../config/config"
import {request} from "playwright/test"
import UserFixtureFunc from '../fixtures/UserFixture'
import exp from "constants"


//Login
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



//Restore password
const restorePassword = async () => {
    const context = await request.newContext({
        
    })
    
    const response = await context.post(`${config.baseUrl}/passwordrecovery`, {
        form: {
            "Email": UserFixtureFunc.Email,
            "send-email": 'Recover'
        }
    })
    }

    export default {loginUser, restorePassword}
   // { email }