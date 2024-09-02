import $api from "../http/index.js";

export default class AuthService {
  static async login(email, password) {
    try {
      return $api.post('/auth/login', {email, password});
    } catch (e) {
      console.log(e.message);
    }
  }

  static async registration(name, email, password) {
    return $api.post('/auth/registration', {name, email, password});
  }

  static async logout() {
    return $api.post('/auth/logout');
  }

}

