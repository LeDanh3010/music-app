import db from "../models/index.js";

class UserApiService {
  // define login
  login() {
    console.log("User logged in");
  }
  //define register
  register(data) {
    console.log("User registered");
  }
  //check email
  async checkEmail(data) {
    try {
      const checkEmail = await db.User.findOne({
        where: {
          email: data.email,
        },
      });
      if (checkEmail) {
        return {
          message: "Email already exists",
          DE: "1",
        };
      } else {
        return {
          message: "Email valid",
          DE: "0",
        };
      }
    } catch (e) {
      return {
        message: "Some thing wrong in userApiService",
      };
    }
  }
}
export const userApiService = new UserApiService();
