import { v4 as uuidv4 } from "uuid";

import { createPresignedUrl } from "../../shared/config/s3-client";
import { Image } from "./model";
export const getUploadUrl = async (req, res) => {
  try {
    // mime = image/jpeg, image/png ...
    const { mime } = req.body;
    if (!mime) {
      return res.status(400).json({ message: "Mime type is required" });
    }

    const filename = uuidv4();
    const extension = mime.split("/")[1];
    const finalName = `${filename}.${extension}`;

    const bucket = process.env.AWS_BUCKET;
    const region = process.env.AWS_REGION;

    const url = await createPresignedUrl({ bucket, key: finalName });

    const fileUrl = `https://${bucket}.s3.${region}.amazonaws.com/${finalName}`;

    res.json({ url, fileUrl, finalName });
  } catch (err) {
    res.status(500).json({ message: "Failed to generate upload URL" });
  }
};

export const createImage = async (req, res) => {
  try {
    const { title, fileUrl } = req.body;
    if (!title || !fileUrl) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const image = await Image.create({ title, fileUrl, userId: null });

    res.status(201).json({
      message: "Image created",
      image,
    });
  } catch (err) {
    res.status(500).json({ message: "Error creating image" });
  }
};

export const getImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: "Error fetching images" });
  }
};

export const getImageById = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findById(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.json(image);
  } catch (err) {
    res.status(500).json({ message: "Error fetching image" });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Image.findByIdAndDelete(id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.json({ message: "Image deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting image" });
  }
};
