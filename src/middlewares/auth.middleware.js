import jwt from 'jsonwebtoken'
import { ApiError } from '../utils/helpers/error.handler'

// eslint-disable-next-line no-undef
// eslint-disable-next-line consistent-return
const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization')

    if (!token) {
      throw ApiError.unauthorized('No authentication token, authorization denied!')
    }

    const splitToken = token.split(' ')

    if (splitToken[0] !== 'Bearer') {
      throw ApiError.unauthorized('No authentication token, authorization denied!')
    }

    jwt.verify(splitToken[1], process.env.JWT_SECRET, (err, verified) => {
      if (err) {
        throw ApiError.unauthorized('Token verification failed, authorization denied.')
      } else {
        req.user = verified.id
        return next()
      }
    })
  } catch (error) {
    return next(error)
  }
}

export default auth
