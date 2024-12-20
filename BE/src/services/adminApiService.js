import db from "../models/index";

class AdminApiService {
  async getUserService() {
    const users = await db.User.findAll({
      raw: true,
      attributes: ["id", "username", "email", "birthDate", "createdAt"],
    });
    if (users) {
      return {
        DE: "1",
        message: "User data fetched successfully",
        data: users,
      };
    }
    return {
      DE: "0",
      message: "No user data found",
      data: null,
    };
  }
}

export const adminApiService = new AdminApiService();
