import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProjectSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    privacy: {
      type: Boolean,
      default: false
    },
    owner: {
      required: true,
      type: String
    },
    tasks: [{
      type: Schema.Types.ObjectId,
      ref: "Task"
    }]
  }
)

const Project = mongoose.model('project', ProjectSchema)
export default Project;
