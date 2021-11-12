import Joi from 'joi'

const registerValidator = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
  country: Joi.string().required(),
  confirmPassword: Joi.string(),
})

export default registerValidator
