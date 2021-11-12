import { BaseResponse } from '../utils/helpers/base-response.handler'
import { ApiError } from '../utils/helpers/error.handler'

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    const exampleResponse = BaseResponse.error(err.status, err.success, err.message)
    return res.status(err.status).json(exampleResponse)
  }

  const exampleResponse = BaseResponse.error(500, 'Internal server error')
  return res.status(500).json(exampleResponse)
}

export default errorHandler
