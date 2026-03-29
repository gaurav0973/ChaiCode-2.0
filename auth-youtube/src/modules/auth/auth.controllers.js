import ApiResponce from "../../common/utils/api-responce.js";
import { login, register } from "./auth.service.js"


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