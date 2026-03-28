import { Router } from "express";
import {getUserProfile, loginUser, registerUser } from "./auth.controllers.js";
import validate from "../../common/middleware/validate.middleware.js";
import RegisterDto from "./dto/register.dto.js";
import LoginDto from "./dto/login.dto.js";
import { isLoggedIn } from "./auth.middleware.js";

const authRouter = Router();

authRouter.post("/register",validate(RegisterDto), registerUser);
authRouter.post("/login", validate(LoginDto), loginUser)
authRouter.get("/profile",isLoggedIn, getUserProfile)

export default authRouter;