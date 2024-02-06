import { faker } from '@faker-js/faker'


export default {
    baseUrl: 'https://thinking-tester-contact-list.herokuapp.com',
    defemail: 'testandre@ele.com',
    testpass: '1234567',
    firstname: faker.person.firstName('male'),
    email: faker.internet.email({ firstName: 'iceiceice'}),
    lastname: faker.person.lastName('female'),
    password: faker.internet.password(),
    country: faker.location.country(),
    datebd: "1998-05-25",
    phone: "9456494945",
    street: faker.location.street(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode()
}

