import { userApiService } from "../services/userApiService.js";

class UserController {
  // Define login method here
  async login(req, res) {
    try {
      const { emailOrUserName, password } = req.body;
      if (!emailOrUserName || !password) {
        return res.status(200).json({
          message: "Please provide email or username and password",
          DE: "0",
        });
      }
      const userLoginResult = await userApiService.signIn(req.body);
      if (userLoginResult?.DT?.refresh_token) {
        res.cookie("refresh_token", userLoginResult.DT.refresh_token, {
          httpOnly: true,
        });
      }
      return res.status(200).json({
        message: userLoginResult.message,
        DE: userLoginResult.DE,
        DT: {
          access_token: userLoginResult?.DT?.access_token,
          user: userLoginResult?.DT?.user,
          email: userLoginResult?.DT?.email,
        },
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Something wrong in server",
      });
    }
  }
  // Define register method here
  async register(req, res) {
    try {
      const registerService = await userApiService.register(req.body);
      return res.status(200).json({
        message: registerService.message,
        DE: registerService.DE,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({
        message: "Something wrong in server",
      });
    }
  }
  //Define check whether the user exist or not
  async checkUser(req, res) {
    try {
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
