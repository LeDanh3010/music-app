class AdminController {
  getUser(req, res) {
    console.log("request", req.body);
  }
}
export const adminController = new AdminController();
