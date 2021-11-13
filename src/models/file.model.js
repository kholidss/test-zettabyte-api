import mongoose from 'mongoose'

const schema = mongoose.Schema

// eslint-disable-next-line new-cap
const fileSchema = new schema({
  userId: {
    type: String,
    required: true,
  },

  fileName: {
    type: String,
    required: true,
  },

  fileDirectory: {
    type: String,
    required: true,
  },
})

const FileModel = mongoose.model('File', fileSchema)
// eslint-disable-next-line import/prefer-default-export
export { FileModel }
