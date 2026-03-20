import http from "http"


const port = 3000;
const server = http.createServer(function(req, res){

});

server.listen(port, function(){
  console.log(`Server is running on  127.0.0.1:${port}... `)
});