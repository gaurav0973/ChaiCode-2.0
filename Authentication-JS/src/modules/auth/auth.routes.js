import { Router } from "express";
import { registerUser } from "./auth.controllers.js";
import validate from "../../common/middleware/validate.middleware.js";
import RegisterDto from "./dto/register.dto.js";

const authRouter = Router();

authRouter.post("/register",validate(RegisterDto), registerUser);


export default authRouter;