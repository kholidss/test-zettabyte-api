import mongoose from 'mongoose'

const schema = mongoose.Schema

// eslint-disable-next-line new-cap
const userSchema = new schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  country: {
    type: String,
    required: true,
  },
})

const UserModel = mongoose.model('User', userSchema)
// eslint-disable-next-line import/prefer-default-export
export { UserModel }
