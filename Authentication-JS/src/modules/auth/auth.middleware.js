import ApiError from "../../common/utils/api-error.js"
import { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.models.js";

export const isLoggedIn = async (req, res, next)=> {
    
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;
    // console.log("Access Token: ", accessToken);
    // console.log("Refresh Token: ", refreshToken);
    if(!accessToken){
        if(!refreshToken){
            throw ApiError.unauthorised("Unauthorized: No token provided");
        }
        const decodedRefreshToken = verifyRefreshToken(refreshToken);
        const user = await User.findOne({_id: decodedRefreshToken.id})
        if(!user){
            throw ApiError.unauthorised("Unauthorized: Invalid refresh token");
        }

        const newAccessToken = generateAccessToken({id: user._id, role: user.role})
        const newRefreshToken = generateRefreshToken({id: user._id, role: user.role})
        user.refreshToken = newRefreshToken
        await user.save()
        res.cookie("accessToken", newAccessToken, {
            httpOnly: true,
        })
        res.cookie("refreshToken", newRefreshToken, {
            httpOnly: true,
        })
        req.user = user
        return next()
    }

    const decodedAccessToken = verifyAccessToken(accessToken);
    const user = await User.findOne({_id: decodedAccessToken.id})
    if(!user){
        throw ApiError.unauthorised("Unauthorized: Invalid access token");
    }
    const newAccessToken = generateAccessToken({id: user._id, role: user.role})
    const newRefreshToken = generateRefreshToken({id: user._id, role: user.role})
    res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
    })
    res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
    })
    user.refreshToken = newRefreshToken
    await user.save()
    req.user = user
    next()
}