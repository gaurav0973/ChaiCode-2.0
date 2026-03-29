import { useTransition } from "react";
import ApiError from "../../common/utils/api-error.js";
import { generateAccessToken, generateRefreshToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.models.js";
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