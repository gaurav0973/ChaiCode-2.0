import express from "express"
const port = 3000;
const app = express()
app.use(express.json())
app.get("/", function(req, res){
    res.send("hello from node hii mauryaEvolves")
})

app.get("/home", function(req, res){
    res.json({
            name : "mauryaEvolves",
            data: "yahi kuch aasa pass sahta hai"
        })
})

app.post("/user", function(req, res){
    const body = req.body
    res.json(body)
})

app.listen(port, function(){
    console.log(`Server is running at http://127.0.0.1:${port}...`)
})