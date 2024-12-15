import useAxios from "../setup/axiosConfig";

class UserService {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }
  login(data) {
    try {
      return this.axios.post("/user/login", data);
    } catch (e) {
      return {
        message: "Some thing wrong in userService",
      };
    }
  }
  create(data) {
    try {
      return this.axios.post("/user/register", data);
    } catch (e) {
      return {
        message: "Some thing wrong in userService",
      };
    }
  }
  findUsernameOrEmail(emailOrUserName) {
    try {
      return this.axios.post("/user/checkUser", emailOrUserName);
    } catch (e) {
      return {
        message: "Some thing wrong in userService",
      };
    }
  }
}
export const useUserService = () => {
  const axiosInstance = useAxios();
  return new UserService(axiosInstance);
};
