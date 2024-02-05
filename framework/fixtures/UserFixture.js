import { faker } from "@faker-js/faker";

  //User register and login
export function UserFixtureFunc() {
  const data = {};

  //Gender choice between M/F
  let gender;
  let random = Math.random();
  gender = random < 0.5 ? "M" : "F";

  //browser token
  const token = 'FGMkg8AFwiEok6J8j-7mbpGUJmC5v58I-8-w3OSjSYzZ7SUZh-gBT68qOLdwbGA5XnZwoiOh7zDc-x9DALG-_T7zp58fuOXjJP1OhNzHr5k1'

  //RegisterButton
  const registerButton = 'Register'

  return {
    addFirstName(firstName) {
      data.FirstName = firstName;
      return this;
    },

    addLastName(lastName) {
      data.LastName = lastName;
      return this;
    },

    generateFirstName(options) {
      const firstName = faker.person.firstName(options);
      this.addFirstName(firstName);
      return this;
    },

    generateLastName(options) {
      const lastName = faker.person.lastName(options);
      this.addLastName(lastName);
      return this;
    },

    addEmail(email) {
        data.email = email;
        return this;
      },
  
    generateEmail(options) {
        const email = faker.internet.email(options);
        this.addEmail(email);
        return this;
      },

    addGender(gender) {
        data.Gender = gender;
        return this;
      },
    
    addToken(token) {
        data.__RequestVerificationToken = token;
        return this;
      },

    addPassword(password) {
      data.password = password;
      return this;
    },

    generatePassword() {
      const password = faker.internet.password();
      this.addPassword(password);
      return this;
    },

    addRegisterButton(registerButton) {
        data['register-button'] = registerButton;
        return this;
      },
    
    build() {
      return {
        __RequestVerificationToken: data.__RequestVerificationToken,
        Gender: data.Gender,
        FirstName: data.FirstName,
        LastName: data.LastName,
        Email: data.email,
        Password: data.password,
        ConfirmPassword: data.password,
      'register-button': data['register-button']
      };
    },
  };
}

export default UserFixtureFunc
