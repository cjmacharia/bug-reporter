import mongoose from 'mongoose'
const Schema = mongoose.Schema
//create user
const TaskSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    
    story: {
      type: String,
      required: true,
      unique: true

    },
    storyType: {
      type: String,
    },
    points: {
      type: Number,
      default: 0
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
      default: 'Low'
    },
    requester: {
      required: true,
      type: String
    },
    owner: {
      type: String
    },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }],
    updateAt: {
      type: Date,
      default: new Date(),
    },
  })
  
  const Task = mongoose.model('Task', TaskSchema)

  export default Task;