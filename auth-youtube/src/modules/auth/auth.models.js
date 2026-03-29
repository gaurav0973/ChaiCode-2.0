import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    refreshToken:String,
    // email verification
    isVerified:{
        type:Boolean,
        default:false
    },
    verificationToken:{
        type:String
    }
}, {
    timestamps:true
})

// passord hashing with presace hook
userSchema.pre("save", async function(){
    if(!this.isModified("password"))
        return 
    this.password = await bcrypt.hash(this.password, 10)
})

// prototypes 
userSchema.methods.comparePassword = async function(clearTextPassword){
    return await bcrypt.compare(clearTextPassword, this.password)
}

export default mongoose.model("User", userSchema)