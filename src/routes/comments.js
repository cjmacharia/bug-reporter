import * as commentsControllers from '../controller/taskcommentsController'
import passport from '../passport/token-verify';
import  validateOwner from '../utils/validateOwnerMiddleware'
export default (app) => {
  console.log(validateOwner, 'opopopo')
  app.post('/task/:id/new', passport.authenticate('jwt', {session:false}), commentsControllers.createComment);
  app.delete('/task/:id/comment/:cid', passport.authenticate('jwt', {session:false}),validateOwner, commentsControllers.deleteComment);
  app.put('/task/:id/comment/:cid', passport.authenticate('jwt', {session:false}),validateOwner, commentsControllers.editComment);
}