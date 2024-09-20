import { Op } from "sequelize";
import db from "../models/index.js";
import bcrypt from "bcryptjs";

class UserApiService {
  // define login
  login() {
    console.log("User logged in");
  }
  //define register
  async register(data) {
    try {
      const hashPassword = async (password) => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
      };
      const hashedPassword = await hashPassword(data.password);
      await db.User.create({
        ...data,
        password: hashedPassword,
      });
      return {
        message: "Registered successfully",
        DE: "1",
      };
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
