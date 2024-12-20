import useAxios from "../setup/axiosConfig";

class UserService {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }
  login(data) {
    return this.axios.post("/user/login", data);
  }

  create(data) {
    return this.axios.post("/user/register", data);
  }

  findUsernameOrEmail(emailOrUserName) {
    return this.axios.post("/user/checkUser", emailOrUserName);
  }
}
export const useUserService = () => {
  const axiosInstance = useAxios();
  return new UserService(axiosInstance);
};
