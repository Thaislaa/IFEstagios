import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

const authRoutes = Router();

const authContoller = new AuthController();

authRoutes.post("/", authContoller.login.bind(authContoller));

export { authRoutes };