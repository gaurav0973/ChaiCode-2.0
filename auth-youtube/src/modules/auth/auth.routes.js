import { Router } from "express";
import RegisterDto from "./dto/register.dto.js";
import validate from "../../common/middleware/validate.middleware.js"
import { loginUser, registerUser } from "./auth.controllers.js";
import LoginDto from "./dto/login.dto.js";
const authRouter = Router()

authRouter.post("/register", validate(RegisterDto), registerUser)
authRouter.post("/login", validate(LoginDto), loginUser)

export default authRouter 