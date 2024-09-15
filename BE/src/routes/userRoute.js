import express from "express";
import { userController } from "../controllers/userController.js";

const api = express.Router();

// Home route

//Site Page
api.post("/login", userController.login);
//register
api.post("/register", userController.register);
//check user
api.post("/checkUser", userController.checkUser);

export default api;
