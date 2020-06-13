import Comment from '../models/Comment';
import * as responses from './responses'


const  validateOwner = async (req, res, next) => {
  Comment.findById(req.params.cid).then(result => {
    let loggedInUserId = req.user.email
    if(!result) {
      responses.serverError(res)
    } else {
      if(result.owner === loggedInUserId) {
        next();
      } else {
        responses.FrobiddenAction(res)
      }
    }
    
  }).catch(err => {
    responses.validationError(err, res)
  })
}
 export default validateOwner;