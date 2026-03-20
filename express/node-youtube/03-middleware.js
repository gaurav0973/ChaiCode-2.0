import http from "http"
const port = 3000;


const server = http.createServer(function(req, res){
    
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



server.listen(port, function(){
    console.log(`Server is running at http://127.0.0.1:${port}...`)
})