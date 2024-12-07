import express from "express";
import { userController } from "../controllers/userController.js";
import CheckUserToken from "../middleware/CheckUserToken.js";

const api = express.Router();
//middleware check token
api.all("*", CheckUserToken);

//Site Page
api.post("/login", userController.login);
//register
api.post("/register", userController.register);
//check user
api.post("/checkUser", userController.checkUser);

export default api;
