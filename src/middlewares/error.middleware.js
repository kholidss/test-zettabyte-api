import { BaseResponse } from '../utils/helpers/base-response.handler'
import { ApiError } from '../utils/helpers/error.handler'

export const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    const exampleResponse = BaseResponse.error(err.status, err.success, err.message)
    return res.status(err.status).json(exampleResponse)
  }

  const exampleResponse = BaseResponse.error(500, 'Internal server error')
  return res.status(500).json(exampleResponse)
}
