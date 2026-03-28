import app from "./src/app.js";
import connectDB from "./src/common/config/db.js";

import dotenv from "dotenv"
import authRouter from "./src/modules/auth/auth.routes.js";

dotenv.config()

const PORT = process.env.PORT || 7000

app.use(express.json())
app.use("/", authRouter)


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