import ApiError from "../../common/utils/api-error.js";
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
