import axios from "../setup/axiosConfig";

class UserService {
  login(data) {
    try {
      return axios.post("/login", data);
    } catch (e) {
      return {
        message: "Some thing wrong in userService",
      };
    }
  }
  create(data) {
    try {
      return axios.post("/register", data);
    } catch (e) {
      return {
        message: "Some thing wrong in userService",
      };
    }
  }
  findUsernameOrEmail(emailOrUserName) {
    try {
      return axios.post("/checkUser", emailOrUserName);
    } catch (e) {
      return {
        message: "Some thing wrong in userService",
      };
    }
  }
}
export const userService = new UserService();
