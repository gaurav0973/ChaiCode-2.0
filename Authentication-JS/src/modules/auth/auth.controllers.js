import ApiResponce from "../../common/utils/api-responce.js"
import { login, register } from "./auth.service.js"



export const registerUser = async(req, res)=>{
    const user = await register(req.body)
    return ApiResponce.created(res, "User registered successfully", user)
}

export const loginUser = async(req, res)=>{
    const data = await login(req.body);
    const {user, accessToken, refreshToken} = data

    // set access and refresh token in http only cookie
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: true,
        maxAge: 1000*15*60 // 15 minutes
    })
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 1000*24*60*60 // 1 day
    })
    
    return ApiResponce.ok(res, "User logged in successfully", {user, accessToken, refreshToken})

}