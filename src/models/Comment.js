import mongoose from 'mongoose'
import { strict } from 'assert';
const Schema = mongoose.Schema


const CommentSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    owner: {
      required: true,
      type: String
    },
    comment: {
      required: true,
      type: String
    }
  }
)

const Comment = mongoose.model('comment', TaskSchema)

export default Comment;