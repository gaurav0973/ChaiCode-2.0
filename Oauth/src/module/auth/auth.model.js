import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profileImageUrl: String,
}, {
    timestamps: true
});

export default mongoose.model("User", userSchema);
