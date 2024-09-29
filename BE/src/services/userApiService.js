import { Op } from "sequelize";
import db from "../models/index.js";
import bcrypt from "bcryptjs";
import { configJwt } from "../Jwt/JwtConfig.jsx";

class UserApiService {
  // define login
  async signIn(data) {
    const user = await db.User.findOne({
      raw: true,
      where: {
        [Op.or]: [
          { email: data.emailOrUserName },
          { username: data.emailOrUserName },
        ],
      },
    });
    const checkPassword = (rawPass, hashPass) => {
      return bcrypt.compareSync(rawPass, hashPass);
    };
    if (user) {
      const isPassword = checkPassword(data.password, user.password);
      if (isPassword) {
        const expiresIn = process.env.JWT_EXP;
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        };
        let token = configJwt.createJwt(payload, expiresIn);
        return {
          message: "Logged in successfully",
          DE: "1",
          DT: {
            access_token: token,
            user: user.name,
            email: user.email,
          },
        };
      }
    }
    return {
      message: "Invalid email or password",
      DE: "0",
    };
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
