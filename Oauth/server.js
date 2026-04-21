import express from "express"
import cookieParser from "cookie-parser"
import connectDB from "./src/common/config/db.js"
import authRoutes from "./src/module/auth/auth.routes.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())

// Views
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html")
})

app.get("/profile", (req, res) => {
  res.sendFile(process.cwd() + "/profile.html")
})

// Routes
app.use("/auth", authRoutes)

// Start server
app.listen(3000, async () => {
  await connectDB()
  console.log("Server running on http://localhost:3000")
})