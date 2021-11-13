/* eslint-disable no-underscore-dangle */
import fs from 'fs'
import YAML from 'yaml'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FileModel } from '../models/file.model'
import { randomString } from '../utils/helpers/random-string.helper'

// eslint-disable-next-line consistent-return
const createfile = async (reqBody, userId) => {
  try {
    const __dirname = dirname(fileURLToPath(import.meta.url)).split('/')

    __dirname.splice(__dirname.indexOf('test-memoora-api') + 1, 2, 'data/')
    const resultDirectroy = __dirname.join('/')

    const fileName = randomString(11)
    const newFile = new FileModel({
      userId,
      fileName,
      fileDirectory: `${resultDirectroy}${userId}/${fileName}.yml`,
      name: reqBody.name,
      email: reqBody.email,
    })
    const saveFile = await newFile.save()

    const registerDataYAML = YAML.stringify({ EMAIL: reqBody.email, NAME: reqBody.name })
    fs.writeFileSync(`data/${userId}/${fileName}.yml`, registerDataYAML)

    return {
      // eslint-disable-next-line no-underscore-dangle
      id: saveFile._id,
      user_id: saveFile.userId,
      file_name: saveFile.fileName,
      file_directory: saveFile.fileDirectory,
      name: saveFile.name,
      email: saveFile.email,
    }
  } catch (error) {
    console.log(error)
  }
}

const getUserFile = async (userId) => {
  const getUser = await FileModel.find({ userId })

  return getUser
}

export default { createfile, getUserFile }
