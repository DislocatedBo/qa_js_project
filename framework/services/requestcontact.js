const fetch = require('node-fetch');
import config from '../config/config'

async function addContact(namefirst, lastname, date, email, phone, street1, street2, city, state, zip, country, token) {
  const response = await fetch(`${config.baseUrl}/contacts`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token
      },
    body: JSON.stringify({
        "firstName": namefirst,
        "lastName": lastname,
        "birthdate": date,
        "email": email,
        "phone": phone,
        "street1": street1,
        "street2": street2,
        "city": city,
        "stateProvince": state,
        "postalCode": zip,
        "country": country
      })
  })
  return {
    data: await response.json(),
    status: response.status
  }
}

async function getContact(token, id) {
    const response = await fetch(`${config.baseUrl}/contacts/${id}`, {
      method: "GET",
      headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + token
        }
    })
    return {
      data: await response.json(),
      status: response.status
    }
  }

  async function delContact(token, id) {
    const response = await fetch(`${config.baseUrl}/contacts/${id}`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + token
        }
    })
    return {
      status: response.status
    }
  }

module.exports = {
    addContact,
    getContact,
    delContact,
};