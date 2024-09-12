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
  findUsername(email) {
    try {
      return axios.get(`/checkUser?email=${email}`);
    } catch (e) {
      return {
        message: "Some thing wrong in userService",
      };
    }
  }
}
export const userService = new UserService();
