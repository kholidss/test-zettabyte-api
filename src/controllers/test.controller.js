import testService from '../services/test.services.'
import { BaseResponse } from '../utils/helpers/base-response.handler'
import { ApiError } from '../utils/helpers/error.handler'

const test = async (req, res) => {
  try {
    const result = await testService.testMiddleware()
    const dateNow = new Date(Date.now()).toISOString()

    return res.json(
      BaseResponse.success('Success test middlware', {
        result,
        time: dateNow,
      })
    )
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

export default { test }
