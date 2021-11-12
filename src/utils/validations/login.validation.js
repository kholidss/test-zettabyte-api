import Joi from 'joi'

const loginValidator = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8),
})

export default loginValidator
