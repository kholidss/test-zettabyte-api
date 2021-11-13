import fileServices from '../services/file.services.'
import { BaseResponse } from '../utils/helpers/base-response.handler'
import { ApiError } from '../utils/helpers/error.handler'

const createFile = async (req, res) => {
  try {
    const result = await fileServices.createfile(req.body, req.user)
    return res.json(BaseResponse.success('Success create file!', result))
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

const getUserFile = async (req, res) => {
  try {
    const result = await fileServices.getUserFile(req.params.id)
    return res.json(BaseResponse.success('success', result))
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

export default { createFile, getUserFile }
