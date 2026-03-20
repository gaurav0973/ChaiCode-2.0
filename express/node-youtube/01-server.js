import http from "http"
const port = 3000;

//  every request from client par run karega
const server = http.createServer(function(req, res){

})

// start listing for incoming rewuest on port 3000
server.listen(port, function(){
    console.log(`Server is running at http://127.0.0.1:${port}...`)
})


// - creating a server ....complete 
// - building up the routes 