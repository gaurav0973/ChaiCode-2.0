import Joi from "joi"
class BaseDto{
    static schema = Joi.object({});
    static validateRequestBodyData = (reqBodyData) => {
        const {error, value} = this.schema.validate(reqBodyData, {
            abortEarly:true,
            stripUnknown:true // mere bataye hue field ke alava koi bhi aaye, hata do
        })
        if(error){
            const errors = error.details.map((d)=> d.message)
            return {
                errors,
                value : null
            }
        }
        return {
            errors:null,
            value
        }

    }
}
export default BaseDto