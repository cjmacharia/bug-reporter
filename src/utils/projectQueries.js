import Project from '../models/Project';
import * as responses from '../utils/responses'
import mongoose from 'mongoose';
import sendProjectInvite from './nodemailer'
export const createProjectQuery = (req, res) => {
  new Project({
    _id:  new mongoose.Types.ObjectId(),
    name: req.body.name,
    owner: req.user.email,
    privacy: req.body.privacy
  }).save()
  .then(result => {
    responses.creationSuccess(result, res)
  }).catch(err => {
    responses.validationError(err, res)
  })
}

export const SendEmailQuery = async (req, res) => {
  Project.findById(req.params.pid).then(result => {
    if(!result) {
      responses.serverError(res)
    }
    if(result.owner === req.user.email) {  //check if creater of this task is the logged in user
       sendProjectInvite(req, res, result)
    }
  })
}
export const saveAuthorisedProjectUsers = async (user, res, result) => {
  Project.findByIdAndUpdate(result._id, {$push: {users: user}}, {new:true}).then(result => {
    if(!result) {
      responses.serverError(res)
    } else {
      console.log(result)
    responses.successfullResponse(res)
    }
  }).catch(err =>  {
    console.log(err)
    responses.validationError(err, res)
  })
}
export const projectInviteAccepted = async (req, res) => {

}