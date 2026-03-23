import { Router } from "express";
import { hiiUser } from "./user.controllers.js";
import UserDto from "./dto/user.dto.js";
import validate from "../../common/middleware/validate.middleare.js";

const router = Router()

router.post("/user",validate(UserDto), hiiUser)

export default router