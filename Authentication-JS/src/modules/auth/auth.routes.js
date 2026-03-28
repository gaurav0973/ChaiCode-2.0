import { Router } from "express";
import { loginUser, registerUser } from "./auth.controllers.js";
import validate from "../../common/middleware/validate.middleware.js";
import RegisterDto from "./dto/register.dto.js";
import LoginDto from "./dto/login.dto.js";

const authRouter = Router();

authRouter.post("/register",validate(RegisterDto), registerUser);
authRouter.post("/login", validate(LoginDto), loginUser)

export default authRouter;