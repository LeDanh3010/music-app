import useAxios from "../setup/axiosConfig";

class AdminService {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }
  getUser() {
    try {
      return this.axios.get("/admin/getUser");
    } catch (e) {
      console.log(e);
      return {
        message: "Some thing wrong in adminService",
      };
    }
  }
}
export const useAdminService = () => {
  const axiosInstance = useAxios();
  return new AdminService(axiosInstance);
};
