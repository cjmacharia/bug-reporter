import Comment from '../models/Comment'
import Task from '../models/Task'

import mongoose from 'mongoose';
import * as responses from './responses'
import task from '../routes/task';


export const createcommentQuery = async (req, res) => {
  new Comment({
    _id:  new mongoose.Types.ObjectId(),
    comment: req.body.comment,
    owner: req.user.email
  }).save()
  .then((result) => {
    Task.findByIdAndUpdate(req.params.id, 
      {$push: {comments: result._id}}, {new:true}).populate('comments').then(result => {
       responses.creationSuccess(result, res)
    }).catch(err => {
       responses.validationError(err, res)
    })
  }).catch(err => {
     responses.validationError(err, res)
  })
}

export const deletecommentQuery = async (req, res) => {
Comment.findByIdAndDelete(req.params.cid).then(data => {
if(!data) {
  responses.validationError(null, res)
}else {
  responses.successfullResponse(res);
}
}).catch(err => {
  responses.validationError(err, res)
})
}

export const editcommentQuery = async (req, res) => {
  Comment.findByIdAndUpdate(req.params.cid, req.body, {new: true}).then(data => {
    responses.getResultsSuccess(data, res);
  }).catch(err => {
    responses.validationError(err, res)
  })
  }
