import jwt from 'jsonwebtoken'

const login = async (user) => {
  // eslint-disable-next-line no-underscore-dangle
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
  // eslint-disable-next-line no-underscore-dangle
  return { id: user._id, email: user.email, name: user.name, country: user.country, token }
}

export default { login }
