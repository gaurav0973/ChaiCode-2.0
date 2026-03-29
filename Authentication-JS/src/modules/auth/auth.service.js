import { sendVerificationEmail } from "../../common/config/email.js";
import ApiError from "../../common/utils/api-error.js";
import { generateAccessToken, generateRefreshToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.models.js";
import crypto from "crypto"

export const register = async ({ name, email, password, role }) => {
    //1. yaha par data bilkul validate hokar milega => thanks to middleware(DTO)
    //2. check user already exist in db
    const existingUser = await User.findOne({ email });
    if (existingUser) throw ApiError.conflict("User Already exists");

    //3. create new user in db
    // NOTE: password hashing in user model => pre save hook
    const newUser = await User.create({ name, email, password, role });
    if (!newUser) throw ApiError.internal("Failed to create user");

    // 4. send email for email verification 
    const token = crypto.randomBytes(32).toString("hex");
    newUser.verificationToken = token
    await newUser.save()
    await sendVerificationEmail(newUser.email, token)
    return newUser;
};


export const login = async({email, password}) => {
    // 1. check user in DB 
    const user = await User.findOne({email})
    if(!user)
        throw ApiError.unauthorised("Invalid credentials")

    // 2. compare password
    const isPasswordMatch = await user.comparePassword(password)
    if(!isPasswordMatch)
        throw ApiError.unauthorised("Invalid credentials")

    //3.user is verified 
    if(!user.isVerified)
        throw ApiError.unauthorised("Email not verified, please verify your email")

    // 4. access and refresh token 
    const payload = {
        id: user._id,
        role: user.role
    }
    const accessToken = generateAccessToken(payload)
    const refreshToken = generateRefreshToken(payload)
    user.refreshToken = refreshToken
    await user.save()

    return {
        user, 
        accessToken, 
        refreshToken
    }
}

export const getProfile = async(userId)=>{
    const user = await User.findById(userId)
    if(!user) throw ApiError.notFound("User not found");
    return user
}

export const logout = async(userId) => {
    await User.findByIdAndUpdate(userId, {refreshToken: null})
}

export const verifyEmail = async(token) => {
    const user = await User.findOne({verificationToken: token})
    if(!user) 
        throw ApiError.notFound("Invalid token")

    user.isVerified = true
    user.verificationToken = null
    await user.save()
}