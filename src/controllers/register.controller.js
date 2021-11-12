import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import registerService from '../services/register.services'
import { BaseResponse } from '../utils/helpers/base-response.handler'
import { userModel } from '../models/user.model'
import { ApiError } from '../utils/helpers/error.handler'

const register = async (req, res, next) => {
  try {
    const { name, email, password, confirmPassword, country } = req.body

    if (password !== confirmPassword) {
      throw ApiError.badRequest('Passwords do not match. Please try again!')
    }

    const existingEmail = await userModel.findOne({ email })
    if (existingEmail) {
      throw ApiError.unprocessableEntity('Email already in use. Please use another email!')
    }

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    const bodyRegister = {
      name,
      email,
      country,
      password: passwordHash,
    }
    const result = await registerService.register(bodyRegister)
    return res.json(BaseResponse.successCreate('Success create new user!', result))
  } catch (error) {
    next(error)
  }
}

export default { register }
