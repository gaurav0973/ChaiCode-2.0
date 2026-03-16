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
                limit: limit | "10"
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

        app.post("/order", (req, res)=>{
            const order = req.body
            res.status(201).json({
                status: "Created",
                order : order
            })
        })
    })
}

async function main(){
    await basicServer()
}
main()