import { Router } from "express";
import { hiiUser } from "./user.controllers.js";
const router = Router()

router.post("/user", hiiUser)

export default router