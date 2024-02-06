const fetch = require('node-fetch');
import config from '../config/config'

async function registerUser(namefirst, lastname, email, password) {
  const response = await fetch(`${config.baseUrl}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "firstName": namefirst,
      "lastName": lastname,
      "email": email,
      "password": password
    })
  })
  return {
    data: await response.json(),
    status: response.status
  }
}

async function loginUser(email, password) {
  const response = await fetch(`${config.baseUrl}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "email": email,
      "password": password
    })
  })
  return {
    data: await response.json(),
    status: response.status
  }
}

async function updateUser(namefirst, lastname, email, password, token) {
  const response = await fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + token
    },
    body: JSON.stringify({
      "firstName": namefirst,
      "lastName": lastname,
      "email": email,
      "password": password
    })
  })
  return {
    data: await response.json(),
    status: response.status
  }
}

async function logoutUser(token) {
  const response = await fetch(`${config.baseUrl}/users/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "Authorization": "Bearer " + token
    }
  })
  return {
    status: response.status
  }
}

async function delUser(token) {
  const response = await fetch(`${config.baseUrl}/users/me`, {
    method: 'DELETE',
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
  registerUser,
  loginUser,
  updateUser,
  logoutUser,
  delUser,
};