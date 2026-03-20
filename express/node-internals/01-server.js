import http from "http"

const port = 3000

/*
👉 You are telling Node:
“Whenever a client sends a request → run this function”
👉 This function runs for EVERY request
*/
const server = http.createServer(function(req, res){
    /*
        req (Request object)
        👉 Comes from client
            Contains:
                - URL (/api/users)
                - Method (GET, POST)
                - Headers
                - Body (stream)
    */
    /*
        res (Response object)
        👉 You send data back using this
        Examples:
            - res.write() => Send chunk
            - res.end() => Final send + close
            - res.end("Hello") 
            - res.setHeader(...)
    */
});


/*
What it means:
- Start listening for incoming requests on port 3000
*/
server.listen(port, function(){
  console.log(`Server is running on http://localhost:${port}`);
});