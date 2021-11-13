import bcrypt from 'bcrypt'
import { BaseResponse } from '../utils/helpers/base-response.handler'
import loginService from '../services/login.service'
import { UserModel } from '../models/user.model'

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    // eslint-disable-next-line object-shorthand
    const findUser = await UserModel.findOne({ email: email }, (err, obj) => {
      if (!obj) {
        res.status(401).json({
          code: 401,
          success: false,
          message: 'Login failed, invalid email or password!',
          data: null,
        })
      }
    })
    const passwordMatch = await bcrypt.compare(password, findUser.password)

    if (!passwordMatch) {
      res.status(401).json({
        code: 401,
        success: false,
        message: 'Login failed, invalid email or password!',
        data: null,
      })
    }

    const result = await loginService.login(findUser)

    return res.json(BaseResponse.success('Success login!', result))
  } catch (error) {
    // console.log(error);
    // return next(error)
  }
}

export default { login }
