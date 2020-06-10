import Task from '../models/Task'
import Project from '../models/Project'
import mongoose from 'mongoose';
import * as responses from './responses'
export const createStoryQuery = async(req, res) => {
  const newStory = new Task({
    _id:  new mongoose.Types.ObjectId(),
    story: req.body.story,
    storyType: req.body.type,
    points: req.body.points,
    requester: req.user.email
  })
  newStory.save().then(story => {
    Project.findByIdAndUpdate(req.params.pid, 
      {$push: {tasks: story._id}}, {new:true}).populate('Task').then(result => {
        responses.creationSuccess(result, res)
      }).catch(err => {
      responses.validationError(err, res)
      })
  }).catch(err => {
      responses.validationError(err, res)
  })
}

export const editStoryQuery = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id,  req.body, {new: true}).exec()
  .then(story => {
    responses.updateSuccess(story, res);
  }).catch(err => {
    responses.validationError(err, res)
  })
};
export const getAllStories = async (req, res) => {
  await Task.find({}).populate('comments').then(result => {
    responses.getResultsSuccess(result, res);
  }).catch(err => {
      responses.validationError(err, res)
  })
}

export const getOneStory = async (req, res) => {
  await Task.find({_id: req.params.id}).populate('comments') .then(result => {
    responses.getResultsSuccess(result, res);
  }).catch(err => {
      responses.validationError(err, res)
  })
}
export const deleteStoryQuery = async (req, res) => {
    await Task.findByIdAndRemove(req.params.id, (err, data) => {
      if(err || ! data) {
       responses.validationError(err, res);
      } else  {
       responses.successfullResponse(res);
      }
    })
};
