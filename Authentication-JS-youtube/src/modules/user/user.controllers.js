import ApiResponce from "../../common/utils/api-responce.js"
import User from "./user.models.js"

export const hiiUser = async (req, res)=>{
    console.log("Request Body: ", req.body)
    const {name, email} =req.body
    const newUser = await User.create({
        name: name,
        email: email
    })
    console.log(newUser)
    ApiResponce.ok(res, "User is stored in db", newUser)
}