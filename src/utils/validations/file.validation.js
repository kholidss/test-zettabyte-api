import Joi from 'joi'

const fileValidator = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().email(),
})

export default fileValidator
