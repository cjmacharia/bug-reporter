import mongoose from 'mongoose'
const Schema = mongoose.Schema

//create user
const UserSchema = new Schema(
  {
    story: {
      type: String,
      required: true,

    },
    storyType: {
      type: String,
    },
    points: {
      type: Number,
    },
    requester: {
      type: String
    }
  })