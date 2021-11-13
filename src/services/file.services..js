import fs from 'fs'
import YAML from 'yaml'
import mkdirp from 'mkdirp'
import { UserModel } from '../models/user.model'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FileModel } from '../models/file.model'

const createfile = async (req) => {

  const newFile = new FileModel(req.body)
  const saveFile = await newFile.save()

  

  // eslint-disable-next-line no-underscore-dangle
  mkdirp.sync(`data/${saveUser._id}`)
  const __dirname = dirname(fileURLToPath(import.meta.url));

  // const newFile = new FileModel({
  //   userId : saveUser._id,
  //   fileName : 'file.yml',
  //   fileDirectory : __dirname
  // })
  // await newFile.save()

  // const getUser = await UserModel.find({name: 'Joko'}).populate('File').exec(function (err, product) {
                
  //   console.log(product);
  // });

  const registerDataYAML = YAML.stringify({EMAIL: saveUser.email, NAME: saveUser.name})
  fs.writeFileSync(`data/${saveUser._id}/file.yml`, registerDataYAML)


  return {
    // eslint-disable-next-line no-underscore-dangle
    id: saveUser._id,
    name: saveUser.name,
    email: saveUser.email,
    country: saveUser.country,
  }
}

export default { createfile }
