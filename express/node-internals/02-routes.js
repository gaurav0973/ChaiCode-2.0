import http from "http";

const port = 3000;


const server = http.createServer(function (req, res) {
  // console.log("Url : ", req.url)
  // console.log("Url : ", req.method)
  const url = req.url;
  const method = req.method;
  if (url === "/" && method === "GET") {
    res.write("<h1>Welcome to the Home Page</h1>");
    res.end();
  } else if (url === "/api/status" && method === "GET") {
    // telling browser ki mai json bhej rha
    res.setHeader("Content-Type", "application/json");

    // JSON.stringify(...) => json fromatted string
    res.end(JSON.stringify({ status: "OK", message: "Server is healthy" }));
  } else if (url === "/api/users" && method === "POST") {
    let body = "";

    // 👉 Data comes in chunks (pieces)
    // 👉 You combine them into one string
    req.on("data", (chunk) => {
        console.log("Chunk : ", chunk)
      body += chunk;
      console.log("Body : ", body)
    });

    // 👉 Now full data is received
    req.on("end", () => {
      try {
        // JSON.parse => json formared to usable object
        const parsedBody = JSON.parse(body); // ✅ directly parse
        console.log("Parsed Data:", parsedBody);

        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            message: "User created!",
            data: parsedBody,
          }),
        );
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end("404: Resource not found");
  }
});

server.listen(port, function () {
  console.log(`Server is running on http://localhost:${port}`);
});

/*
    req = incoming request
    res = outgoing response


    curl -X POST http://localhost:3000/api/users \
    -H "Content-Type: application/json" \
    -d '{"name":"Gaurav"}'
 */