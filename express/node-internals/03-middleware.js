import http from "http";

const port = 3000;

function bodyParser(req, fn) {
    let body = "";
    req.on("data", (chunk) => {
        body += chunk;
    });
    req.on("end", () => {
        req.body = JSON.parse(body)
        fn();
    })
};

const server = http.createServer(function (req, res) {
    bodyParser(req, () => {
    const { url, method } = req;
    if (url === "/api/users" && method === "POST") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ 
            message: "User created!", 
            received: req.body 
        }));
        } 
    });
});

server.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});