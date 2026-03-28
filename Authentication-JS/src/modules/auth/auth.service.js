import ApiError from "../../common/utils/api-error.js";
import { generateAccessToken, generateRefreshToken } from "../../common/utils/jwt.utils.js";
import User from "./auth.models.js";

export const register = async ({ name, email, password, role }) => {
    //1. yaha par data bilkul validate hokar milega => thanks to middleware(DTO)
    //2. check user already exist in db
    const existingUser = await User.findOne({ email });
    if (existingUser) throw ApiError.conflict("User Already exists");

    //3. create new user in db
    // NOTE: password hashing in user model => pre save hook
    const newUser = await User.create({ name, email, password, role });
    if (!newUser) throw ApiError.internal("Failed to create user");
    return newUser;
};


export const login = async({email, password}) => {
    // 1. check user in DB 
    const user = await User.findOne({email})
    if(!user)
        throw ApiError.unauthorized("Invalid credentials")

    // 2. compare password
    const isPasswordMatch = await user.comparePassword(password)
    if(!isPasswordMatch)
        throw ApiError.unauthorized("Invalid credentials")

    // 3. access and refresh token 
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
