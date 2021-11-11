import * as Joi from 'joi';

export const merchantUserIsActiveValidator = Joi.object().keys({
  is_active: Joi.boolean(),
});
