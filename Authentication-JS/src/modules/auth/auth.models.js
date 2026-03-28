import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        minlength: 2,
        maxlength: 50,
        required: [true, "Name is required"]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Email is required"],
        unique: true,
        lowercase:true //sare email db me lower case me store honge
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minLenght: 8,
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "customer"
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    emailVerificationToken:{
        type: String, 
    },
    emailVerificationTokenExpiry:{
        type: Date,
    }
}, {
    timestamps:true
})


export default mongoose.model("User", userSchema)
// Note : User => database me jata hahi then 
            //  1. plural hota hai = users
            //  2. pahla wala small letter ho jata hai