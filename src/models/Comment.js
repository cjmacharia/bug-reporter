import mongoose from 'mongoose'
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
    updateAt: {
      type: Date,
      default: new Date(),
    },
  }
)

const Comment = mongoose.model('Comment', CommentSchema)

export default Comment;