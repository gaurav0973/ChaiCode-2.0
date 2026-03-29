import ApiResponce from "../../common/utils/api-responce.js";
import { getProfile, login, logout, register, verifyEmail } from "./auth.service.js"


export const registerUser = async(req, res) => {
    const user = await register(req.body);
    return ApiResponce.created(res, "user registered successfully", user);
}

export const loginUser = async(req, res)=>{
    const {user, accessToken, refreshToken} = await login(req.body);
    res.cookie("accessToken", accessToken,{
        httpOnly:true
    })
    res.cookie("refreshToken", refreshToken,{
        httpOnly:true
    })
    return ApiResponce.ok(res, "User is logged in successfully", {user, accessToken})
}

export const getUserProfile = async(req, res)=>{
    const user = await getProfile(req.user.id);
    return ApiResponce.ok(res, "Profile fetched successfully", user)
}
export const logoutUser = async(req, res)=>{
    await logout(req.user.id)
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    return ApiResponce.ok(res, "user loged out successfully")
}


export const verifyUserEmail = async(req, res) => {
    await verifyEmail(req.params.token);
    return ApiResponce.ok(res, "Email is verified Successfully");
}