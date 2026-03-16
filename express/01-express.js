import express from "express"

function basicServer(){
    return new Promise((resolve, reject)=>{
        const app = express()
        app.use(express.json())
        

        //app.get(endpoints, handler)
        /*
        res.json()
            - Content-Type : application/json
            - sending the responce back to client NOTE: serelise karke bhejeta hai
        */
        app.get("/menu", (_, res)=>{
            res.json({
                items : ["daal", "chawal"]
            })
        })

        // Query : chaicode.com/search?q=chawal&limit=5
        app.get("/search", (req, res) =>{
            const {q, limit} = req.query
            res.json({
                query: q,
                limit: limit || "10"
            })
        })

        // Route params  or path params
        app.get("/menu/:id", (req, res)=>{
            const {id} = req.params
            res.json({
                item: id,
                price: 140
            })
        })

        // POST : req.body
        app.post("/order", (req, res)=>{
            const order = req.body
            res.status(201).json({
                status: "Created",
                order : order
            })
        })


        const server = app.listen(0, async () => {
            const port = server.address().port
            const baseUrl = `http://127.0.0.1:${port}`

            try {
                const menuRes = await fetch(`${baseUrl}/menu`)
                const menuDate = await menuRes.json() //parsing : serialisation and dserialisation
                console.log('GET /menu : ', JSON.stringify(menuDate))


                console.log("++++++++++++++++++++++++++")


                const searchRes = await fetch(`${baseUrl}/search?q=biryani&limit=5&page=3`)
                const searchData = await searchRes.json();
                console.log('GET /search : ', JSON.stringify(searchData))

                console.log("++++++++++++++++++++++++++")

                const menuItemRes = await fetch(`${baseUrl}/menu/4`)
                const menuItemData = await menuItemRes.json();
                console.log('GET /menu/:id : ', JSON.stringify(menuItemData))

                console.log("++++++++++++++++++++++++++")

                const orderRes = await fetch(`${baseUrl}/order`, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        dish : "biryani",
                        quantity: 2
                    })
                })
                const orderData = await orderRes.json();
                console.log('POST /order ', JSON.stringify(orderData))

                console.log("++++++++++++++++++++++++++")



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
    await basicServer()
}
main()