import app from "./src/app.js"
import connectDB from "./src/common/config/db.js"
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 7000

const start = async() => {
    await connectDB()
    app.listen(PORT, () => {
        console.log("Server is listing at POST: ", PORT)
    })
}


start().catch(err => {
    console.log("Error in connceting to the server: ", err)
    process.exit(0)
})




