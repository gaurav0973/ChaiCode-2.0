import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import express from "express";

async function main() {
    const app = express();
    app.use(cors({ origin: "*" }));
    const server = createServer(app);

    const io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {
        console.log("A user connected:", socket.id);
        socket.on("send_message", (message) => {
            io.emit("receive_message", message);
        });
            // test
        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });

    server.listen(4000, () => {
        console.log("Server is listening on port 4000");
    });
}

main();