import Joi from "joi"
import BaseDto from "../../../common/dto/base.dto.js"

class UserDto extends BaseDto{
    static schema = Joi.object({
        name: Joi.string().trim().min(4).required(),
        email: Joi.string().required()
    })

}

export default UserDto