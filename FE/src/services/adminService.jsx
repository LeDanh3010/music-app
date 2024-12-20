import useAxios from "../setup/axiosConfig";

class AdminApiService {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }
  getUser() {
    return this.axios.get("/admin/getUser");
  }
}
export const useAdminApiService = () => {
  const axiosInstance = useAxios();
  return new AdminApiService(axiosInstance);
};
