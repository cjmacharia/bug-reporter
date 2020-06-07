import Task from '../models/Task'
import mongoose from 'mongoose';
import * as responses from './responses'
export const createStoryQuery = async(res,req) => {
  const newStory = new Task({
    _id:  new mongoose.Types.ObjectId(),
    story: req.body.story,
    storyType: req.body.type,
    points: req.body.points,
    requester: req.user.email
  })
  newStory.save((err, story) => {
    if(err) {
      responses.validationError(res, err)
    } else {
      responses.creationSuccess(res, story)
    }
  })
}

export const editStoryQuery = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id,  req.body, {new: true}).exec()
  .then(story => {
    responses.updateSuccess(res, story);
  }).catch(err => {
    responses.validationError(res, err)
  })
};
export const getAllStories = async (req, res) => {
  await Task.find({}, (err, result) => {
    if (err) {
      responses.validationError(res, err)
   } else {
    responses.getResultsSuccess(res, result);
  }
  })
}

export const getOneStory = async (req, res) => {
  await Task.find({_id: req.params.id}, (err, result) => {
    if (err) {
      responses.validationError(res, err)
   } else {
    responses.getResultsSuccess(res, result);
  }
  })
}
export const deleteStoryQuery = async (req, res) => {
    await Task.findByIdAndRemove(req.params.id, (err, data) => {
      if(err || ! data) {
       responses.validationError(res, err);
      } else  {
       responses.successfullResponse(res);
      }
    })
};
