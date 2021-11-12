import { BaseResponse } from '../utils/helpers/base-response.handler'
import { ApiError } from '../utils/helpers/error.handler'
import loginService from '../services/login.service'
// import { ApiError } from '../utils/helpers/error.handler'

const login = async (req, res) => {
  try {
    const result = await loginService.login()

    return res.status.json(BaseResponse.success(result, null))
  } catch (error) {
    throw ApiError.internal(`Error! ${error}`)
  }
}

export default { login }
