import { ApiError } from '../utils/helpers/error.handler'

export default function validation(schema) {
  // eslint-disable-next-line func-names
  return async function (req, res, next) {
    try {
      const result = await schema.validate(req.body)
      if (result.error) {
        throw ApiError.badRequest(result.error.message)
      }
      next()
    } catch (error) {
      next(error)
    }
  }
}
