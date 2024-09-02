import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService.js";


export default class Store {
  user = {}
  auth = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(auth) {
    this.auth = auth;
  }

  setUser(user) {
    this.user = user;
  }

  async login(email, password) {
    try {
      console.log(email)
      const response = await AuthService.login(email, password);
      console.log(response.data.accessToken)

      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true)
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async registration(name, email, password) {
    try {
      const response = await AuthService.registration(name, email, password);
      console.log(response)
      localStorage.setItem('token', response.data.accesToken);
      this.setAuth(true)
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false)
      this.setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}