import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProjectSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
    privacy: {  // is the project private or nah 
      type: Boolean,
      default: false
    },
    owner: {   //project created
      required: true,
      type: String
    },
    tasks: [{  // tasks that belong to this project 
      type: Schema.Types.ObjectId,
      ref: "Task"
    }],
    users: [{   //array of project authorised users 
      type: String,
      ref: 'User',
    }],
    updateAt: {
      type: Date,
      default: new Date(),
    },
  }
)

const Project = mongoose.model('project', ProjectSchema)
export default Project;
