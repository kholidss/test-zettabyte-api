import { userModel } from '../models/user.model'

const register = async (bodyRegister) => {
  const newUser = new userModel(bodyRegister)
  const save = await newUser.save()

  return {
    id: save._id,
    name: save.name,
    email: save.email,
    country: save.country,
  }
}

export default { register }
