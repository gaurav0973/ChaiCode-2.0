import http from "http"
const port = 3000;


const server = http.createServer(function(req, res){
    // console.log("Request URL : ", req.url)
    // console.log("Request METHOD : ", req.method)
    const url = req.url;
    const method = req.method;
    if(url === "/" && method === "GET"){
        // res.write("hello from node")
        // res.write("hii mauryaEvolves")
        res.end("hello from node hii mauryaEvolves")
    }
    if(url === "/home" && method === "GET"){
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({
            name : "mauryaEvolves",
            data: "yahi kuch aasa pass sahta hai"
        }))
    }
    if(url === "/user" && method === "POST"){
        let body = ""

        req.on("data", (chunk)=>{
            console.log("Chunks : ", chunk)
            body+=chunk;
        })
        req.on("end", ()=>{
            const data = JSON.parse(body)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(JSON.stringify(data)))
        })
    }
})

// app.use(express.json())


server.listen(port, function(){
    console.log(`Server is running at http://127.0.0.1:${port}...`)
})

// server 
// routes => get, post , put, delete ....
// middlewere