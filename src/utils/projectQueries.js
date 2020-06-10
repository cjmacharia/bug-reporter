import Project from '../models/Project';

import * as responses from '../utils/responses'
import mongoose from 'mongoose';


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