import app from "./src/app.js";
import connectDB from "./src/common/config/db.js";

import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 7000


async function start(){
    await connectDB()
    app.listen(PORT, ()=>{
        console.log("Server is running at PORT: ", PORT)
    })
}
start().catch((error)=>{
    console.log("Error starting the server: ", error)
    process.exit(0)
})