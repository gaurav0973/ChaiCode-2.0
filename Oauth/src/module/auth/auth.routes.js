import express from "express"
import { googleLogin, googleCallback } from "./auth.controller.js"
import { requireAuth } from "../../common/middleware/auth.middleware.js"

const router = express.Router()

router.get("/google", googleLogin)
router.get("/callback", googleCallback)

router.get("/me", requireAuth, (req, res) => {
    res.json({
        name: req.user.name,
        email: req.user.email,
        picture: req.user.picture
    })
})

export default router