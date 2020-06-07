import mongoose from 'mongoose'
const Schema = mongoose.Schema

//create user
const TaskSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
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
      required: true,
      type: String
    },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: "comment"
    }]
  })
  
  const Task = mongoose.model('Task', TaskSchema)

  export default Task;