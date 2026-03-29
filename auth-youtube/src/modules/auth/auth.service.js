import ApiError from "../../common/utils/api-error.js";
import { generateAccessToken, generateRefreshToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.models.js";
import crypto from "crypto"
import { sendVerificationEmail } from "../../common/config/email.js";
export const register = async({name, email, password, role})=> {
    // 1. filterredf data
    // 2. check if the use is alreafy in db 
    // console.log("Email ", email)
    const existingUser = await User.findOne({email});
    // console.log("Existing User: ", existingUser)
    if(existingUser)
        throw ApiError.conflict("User already exists");

    // 3. create a new user
    const newUser = await User.create({name, email, password, role});
    if(!newUser)
        throw ApiError.internal("Failed to create the user")

    // 4. SEND THE email to user
    const token = crypto.randomBytes(32).toString("hex");
    newUser.verificationToken = token
    await newUser.save()
    await sendVerificationEmail(newUser.email, token);


    return newUser;

}

export const login = async({email, password}) => {
    // 1. check user in db
    const user = await User.findOne({email});
    if(!user)
        throw ApiError.unauthorised("Invalid email or password")

    // 2. comparer passord
    const isMatched = await user.comparePassword(password)
    if(!isMatched)
        throw ApiError.unauthorised("Invalid email or password")

    if(!user.isVerified)
        throw ApiError.unauthorised("Email is not verified: Please verify your email first")

    // 3. create access and refresh token
    const payload = {
        id:user._id,
        role: user.role
    }
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);
    // save is the db
    user.refreshToken = refreshToken
    await user.save()

    return {
        user, accessToken, refreshToken
    }
}

export const getProfile = async(userId) => {
    const user = await User.findById(userId);
    if(!user)
        throw ApiError.notFound("user not found")
    return user
}

export const logout = async(userId) => {
    await User.findByIdAndUpdate(userId, {refreshToken:null})
}


export const verifyEmail = async(token) => {
    const user = await User.findOne({verificationToken:token});
    if(!user)
        throw ApiError.notFound("Invalid Token")

    user.isVerified = true
    user.verificationToken=null
    await user.save()
}