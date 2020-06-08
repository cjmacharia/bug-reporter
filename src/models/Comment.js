import mongoose from 'mongoose'
import { strict } from 'assert';
const Schema = mongoose.Schema


const CommentSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    comment: {
      required: true,
      type: String
    },
    owner: {
      required: true,
      type: String
    },
  }
)

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment;