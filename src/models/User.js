import mongoose from 'mongoose'
const Schema = mongoose.Schema

//create user
const UserSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    email_is_verified: {
      type: Boolean,
      default: false
    },
    password: {
      type: String
    },
    role: {
      type: String,
      enum: ['admin', 'developer'],
      default: 'developer'
    }
})

const User = mongoose.model('User', UserSchema)

export default User;