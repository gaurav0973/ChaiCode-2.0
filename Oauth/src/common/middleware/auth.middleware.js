import jwt from "jsonwebtoken"

export async function requireAuth(req, res, next) {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).json({ message: "Not logged in" })
  }
  try {
    const user = await jwt.verify(token, process.env.JWT_SECRET)
    console.log("Decoded user from token:", user)
    req.user = user
    next()
  } catch (error) {
    console.error("Error verifying token:", error)
    return res.status(401).json({ message: "Invalid token" })
  }
}