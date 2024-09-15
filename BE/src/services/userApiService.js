import { Op } from "sequelize";
import db from "../models/index.js";

class UserApiService {
  // define login
  login() {
    console.log("User logged in");
  }
  //define register
  async register(data) {
    try {
      const user = await db.User.create({
        data,
      });
      console.log("user", user);
    } catch (e) {
      console.error("Error in register:", e);
      return {
        message: "Some thing wrong in userApiService",
      };
    }
  }
  //check email
  async checkEmailOrUsername(data) {
    try {
      const existingUser = await db.User.findOne({
        where: {
          [Op.or]: [
            { email: data.emailOrUserName },
            { username: data.emailOrUserName },
          ],
        },
      });

      if (existingUser) {
        return {
          message: "Email or username already exists",
          DE: "1",
        };
      } else {
        return {
          message: "User valid",
          DE: "0",
        };
      }
    } catch (e) {
      console.error("Error in checkEmail:", e);
      return {
        message: "Some thing wrong in userApiService",
      };
    }
  }
}
export const userApiService = new UserApiService();
