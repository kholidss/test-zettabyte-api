import { BaseResponse } from '../utils/helpers/base-response.handler'
import { ApiError } from '../utils/helpers/error.handler'

const healthCheck = async (req, res) => {
  try {
    const dateNow = new Date(Date.now()).toISOString()

    return res.json(
      BaseResponse.success('Success healthcheck', {
        status: "I'am well",
        time: dateNow,
      })
    )
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

export default { healthCheck }
