import ApiError from "../../common/utils/api-error.js";
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