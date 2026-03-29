import ApiResponce from "../../common/utils/api-responce.js";
import { register } from "./auth.service.js"


export const registerUser = async(req, res) => {
    const user = await register(req.body);
    return ApiResponce.created(res, "user registered successfully", user);
}