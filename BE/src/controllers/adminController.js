import { adminApiService } from "../services/adminApiService";

class AdminController {
  async getUser(req, res) {
    try {
      const getUserResult = await adminApiService.getUserService();
      return res.status(200).json({
        DE: getUserResult.DE,
        message: getUserResult.message,
        data: getUserResult.data,
      });
    } catch (e) {
      console.error("Error get user ", e);
      return res.status(500).json({
        message: "Something wrong in fetch user data",
      });
    }
  }
}
export const adminController = new AdminController();
