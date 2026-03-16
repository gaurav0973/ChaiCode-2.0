import express from "express"

function routingInExpress(){
    return new Promise((resolve, reject)=>{
        const app = express()
        app.use(express.json())
        
        // routes
        const routes = {
            1:{
                id:1,
                name: "A",
                direction: "North"
            },
            2:{
                id:2,
                name:"B",
                direction: "East"
            }
        }

        let nextId = 3

        //list all train
        app.get("/routes", (req, res)=>{
            res.json(Object.values(routes))
        })

        // single route by id
        app.get("/routes/:id", (req, res)=>{
            const route = routes[req.params.id];
            if(!route){
                return res.status(404).json({
                    error: "No train on this id"
                })
            }
            res.json(route)
        })

        app.post("/routes", (req, res)=>{
            const newRoute = {
                id: nextId++,
                ...req.body
            }
            routes[newRoute.id] = newRoute
            res.status(201).json(newRoute)
        })
        
        app.put("/routes/:id", (req, res)=>{
            const id = req.params.id
            if(!routes[id]){
                return res.status(404).json({
                    error: "Something went wrong"
                })
            }
            routes[id] = {
                id: Number(id),
                ...req.body
            }
        })

        // Kuch cheje hi update karni hai => partial data hi update karna hai 
        app.patch("/routes/:id", (req, res)=>{
            const id = req.params.id
            if(!routes[id]){
                return res.status(404).json({
                    error: "Something went wrong"
                })
            }
            routes[id] = {
                id: Number(id),
                ...req.body
            }
        })

        app.delete("/routes/:id", (req, res)=>{
            const id = req.params.id
            if(!routes[id]){
                return res.status(404).json({
                    error: "Something went wrong"
                })
            }
            delete routes[id]
            res.status(204).end()
        })


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

function routingInExpresss(){
    return new Promise((resolve, reject)=>{
        const app = express()
        app.use(express.json())
        
        // files/docs/readme.txt       
        // wildcard => kuch bhi
        app.get("/files/*filepath", (req, res)=>{
            const filepath = req.params.filepath
            res.json({
                filepath,
                type: "wildcard"
            })
        })

        app.route("/schedule")
            .get((req, res)=>{})
            .post((req, res)=>{})
            .put((req, res)=>{})
            .patch((req, res)=>{})
            .delete((req, res)=>{})

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
    // await routingInExpress()
    await routingInExpresss()
}
main()