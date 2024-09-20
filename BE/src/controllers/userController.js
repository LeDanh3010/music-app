import { userApiService } from "../services/userApiService.js";

class UserController {
  // Define login method here
  async login(req, res) {
    console.log(req.body);
    res.status(200).json({ message: "Logged in successfully" });
  }
  // Define register method here
  async register(req, res) {
    console.log("req", req.body);
    const registerService = await userApiService.register(req.body);
    return res.status(200).json({
      message: registerService.message,
      DE: registerService.DE,
    });
  }
  //Define check whether the user exist or not
  async checkUser(req, res) {
    try {
      console.log("req", req.body);
      const checkUserExist = await userApiService.checkEmailOrUsername(
        req.body
      );
      return res.status(200).json({
        message: checkUserExist.message,
        DE: checkUserExist.DE,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Something wrong in server",
      });
    }
  }
}
export const userController = new UserController();
