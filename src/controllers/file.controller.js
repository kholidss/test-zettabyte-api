import fileServices from '../services/file.services.'
import testService from '../services/file.services.'
import { BaseResponse } from '../utils/helpers/base-response.handler'
import { ApiError } from '../utils/helpers/error.handler'

const createFile = async (req, res) => {
  try {
    const result = await fileServices.createfile(req)

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

export default { createFile }
