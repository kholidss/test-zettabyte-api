import * as Joi from 'joi';

export const roleBodyValidator = Joi.object().keys({
  name: Joi.string().required().min(3),
  description: Joi.string().required().min(3),
  privileges: Joi.array(),
  group: Joi.string().required().min(3),
});
