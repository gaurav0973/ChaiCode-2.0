
import express from "express"

function middleWare(){
    return new Promise((resolve, reject)=>{
        const app = express()
        const logs = []
        app.use(express.json()) // app.use(yahi hai middleware => pahle yaha mujhse milkar jana)

        // middleware
        app.use((req, res, next, error)=>{
            next()
        })

        // middleware : request logger
        app.use((req, res, next)=>{
            // add to database
            //console log everything
            // write in some file
            const logEntry = `${req.method} : ${req.url}`
            logs.push(logEntry)
            console.log(`[LOG] -- ${logEntry}`)
            
            // If request hangs forever => middleware me galti hai kahi na kahi
            next()

        })

        app.use((req, res, next)=>{
            
            req.startTime = Date.now()
            res.on("finish", ()=>{
                const duration = Date.now() - req.startTime
                console.log(`[TIMER] -- ${req.method} -- ${req.url} took ${duration}ms`)
            })

            next()
        })

        function authMe(req, res, next){
            const token = req.headers['x-auth-token']
            if(!token){
                return res.json({
                    error: "No token, please login"
                })
            }
            if(token !== "secret-chaicode"){
                return res.json({
                    error: "Invalid Token"
                })
            }

            // token --> extract data from token => userId , email
            req.user = {
                id: 1,
                name: "gaurav",
                role: "admin"
            }
            next()
        }
        app.get("/profile", authMe, another, oneMore, ()=>{})

        
        function getRole(role){
            return (req, res, next)=>{
                if(!req.user || req.user.role !== role){
                    return res.status(403).json({
                        error: "Role is required"
                    })
                }
            }
            next()
        }
        app.get("/profile", authMe, getRole("admin"), ()=>{})
        app.get("/profile", authMe, getRole("teacher"), ()=>{})
        app.get("/profile", authMe, getRole("student"), ()=>{})
        
        function rateLimiter(maxRequest){
            let count = 0;
            return (req, res, next)=>{
                count++;
                if(count > maxRequest){
                    return res.json({
                        message : "Too many request, please try after some time"
                    })
                }
                next();
            }
        }
        const limitedEndPoint = rateLimiter(3)
        app.get("/limited", limitedEndPoint, (req, res) =>{})


        const server = app.listen(0, async () => {
            const port = server.address().port
            const baseUrl = `http://127.0.0.1:${port}`

            try {
                // Calling the apis
            } catch (error) {
                console.log(error)
            }
            // resolve(server)
            server.close(()=>{
                console.log("Server has serverd his purpose")
                resolve(server)
            })
        })
    })
}


async function main(){
    await middleWare()
}
main()