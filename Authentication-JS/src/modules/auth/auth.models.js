import mongoose from "mongoose";
import bcrypt from "bcryptjs";
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
        minlength: 8,
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    refreshToken:{
        type: String,
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    verificationToken:{
        type: String,
    }

}, {
    timestamps:true
})

// password hashing => pre save hook
userSchema.pre("save", async function(){
    
    // jab password me change ho, tabhi hash karo
    if(!this.isModified("password")) 
        return 
    this.password =  await bcrypt.hash(this.password, 10)
})

// prototype ki tarah hi to hai
userSchema.methods.comparePassword = async function(clearTextPasswordByUser){
    return await bcrypt.compare(clearTextPasswordByUser, this.password);
}

export default mongoose.model("User", userSchema)
// Note : User => database me jata hahi then 
            //  1. plural hota hai = users
            //  2. pahla wala small letter ho jata hai