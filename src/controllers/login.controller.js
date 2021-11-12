import bcrypt from 'bcrypt'
import { BaseResponse } from '../utils/helpers/base-response.handler'
import loginService from '../services/login.service'
import { UserModel } from '../models/user.model'
import { ApiError } from '../utils/helpers/error.handler'

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const findUser = await UserModel.findOne({ email })
    const passwordMatch = await bcrypt.compare(password, findUser.password)

    if (!findUser && !passwordMatch) {
      throw ApiError.unauthorized('Login failed, invalid email or password!')
    }

    const result = await loginService.login(findUser)

    return res.json(BaseResponse.success('Success login!', result))
  } catch (error) {
    return next(error)
  }
}

export default { login }
