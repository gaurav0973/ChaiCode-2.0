import express from "express";
import fileRouter from "./module/file-upload/routes";
export function createApp() {
  const app = express();
  app.use(express.json());
  app.use((req, res, next) => {
    res.setHeader(
      "Access-Control-Allow-Origin",
      process.env.FRONTEND_ORIGIN ?? "http://localhost:3000",
    );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,DELETE,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }

    next();
  });
  app.get("/health", (req, res) => {
    res.json({
      ok: true,
    });
  });
  app.use("/api/files", fileRouter);
  return app;
}
