import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/auth/";

class AuthService {
  login(email, password) {
    const request = {
      email: email,
      password: password,
    };
    return axios.post(API_URL + "login", request)
      .then(response => {
        if (response.data.basicToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    axios.post(API_URL + "logout", {});
  }

  register(username, email, password) {
    return axios.post(API_URL + "register", {
      username,
      email,
      password,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}

export default new AuthService();
