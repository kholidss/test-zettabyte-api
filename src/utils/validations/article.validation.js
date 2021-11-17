import Joi from 'joi'

const articleValidator = Joi.object({
  title: Joi.string().required().min(3),
  category: Joi.string().required().min(2),
  content: Joi.string().required().min(50),
})

export default articleValidator
