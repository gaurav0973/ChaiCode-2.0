import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        title: {
        type: String,
        required: true,
        },
        fileUrl: {
        type: String,
        required: true,
        }
    },
    { timestamps: true }
);

export const Image = mongoose.model("Image", imageSchema);