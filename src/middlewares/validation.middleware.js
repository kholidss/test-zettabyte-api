import { BaseResponse } from "../utils/helpers/base-response.handler";

export function validation(schema) {
  return async function (req, res, next) {
    const result = await schema.validate(req.body);

    if (result.error) {
      return res
        .status(400)
        .json(BaseResponse.error(400, result.error.message));
    }
    next();
  };
}
