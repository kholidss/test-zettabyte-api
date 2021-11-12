import { UserModel } from '../models/user.model'

const register = async (bodyRegister) => {
  const newUser = new UserModel(bodyRegister)
  const save = await newUser.save()

  return {
    // eslint-disable-next-line no-underscore-dangle
    id: save._id,
    name: save.name,
    email: save.email,
    country: save.country,
  }
}

export default { register }
