import * as Joi from 'joi';

export const merchantUserValidator = Joi.object().keys({
  name: Joi.string().required().min(3),
  email: Joi.string().email().required().min(3),
  merchant_id: Joi.number().required(),
  role_id: Joi.number().required(),
  is_active: Joi.boolean(),
});
