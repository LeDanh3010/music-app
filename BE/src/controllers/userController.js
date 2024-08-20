class UserController {
  login(req, res) {
    console.log(req.body);
    res.status(200).json({ message: "Logged in successfully" });
  }
}
export const userController = new UserController();
