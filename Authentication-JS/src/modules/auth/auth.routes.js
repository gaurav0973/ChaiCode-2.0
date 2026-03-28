import { Router } from "express";
import { registerUser } from "./auth.controllers.js";

const authRouter = Router();

authRouter.get("/register", registerUser);


export default authRouter;