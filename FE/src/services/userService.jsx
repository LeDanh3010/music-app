import axios from "../setup/axiosConfig";

class UserService {
  login() {
    axios.post();
  }
  create(data) {
    try {
      console.log(data);
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
