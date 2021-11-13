import fs from 'fs'
import YAML from 'yaml'
import mkdirp from 'mkdirp'
import { UserModel } from '../models/user.model'
import { randomString } from '../utils/helpers/random-string.helper'

const register = async (bodyRegister) => {
  const newUser = new UserModel(bodyRegister)
  const save = await newUser.save()

  // eslint-disable-next-line no-underscore-dangle
  const madeDir = mkdirp.sync(`data/${save._id}`)
  const registerDataYAML = YAML.stringify({EMAIL: save.email, NAME: save.name})
  fs.writeFileSync(`data/${save._id}/${randomString(10)}.yml`, registerDataYAML)

  return {
    // eslint-disable-next-line no-underscore-dangle
    id: save._id,
    name: save.name,
    email: save.email,
    country: save.country,
  }
}

export default { register }
