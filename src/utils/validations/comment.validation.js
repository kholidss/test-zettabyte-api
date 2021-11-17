import Joi from 'joi'

const commentValidator = Joi.object({
  username: Joi.string().required().min(1),
  comment: Joi.string().required(),
  article_id: Joi.string().required().min(5),
})

export default commentValidator
