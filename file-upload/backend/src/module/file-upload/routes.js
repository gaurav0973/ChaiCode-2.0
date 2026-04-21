import { Router } from "express";
import { createImage, deleteImage, getImageById, getImages, getUploadUrl } from "./controllers";


const fileRouter = Router();

fileRouter.post("/upload-url", getUploadUrl);
fileRouter.post("/images", createImage);
fileRouter.get("/images", getImages);
fileRouter.get("/images/:id", getImageById);
fileRouter.delete("/images/:id", deleteImage);

export default fileRouter;