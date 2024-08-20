import express from "express";
import { userController } from "../controllers/userController";

const api = express.Router();

// Home route

//Site Page
api.post("/login", userController.login);

export default api;
