import { Router } from "express";
import RegisterDto from "./dto/register.dto.js";
import validate from "../../common/middleware/validate.middleware.js"
import { registerUser } from "./auth.controllers.js";
const authRouter = Router()

authRouter.post("/register", validate(RegisterDto), registerUser)


export default authRouter 