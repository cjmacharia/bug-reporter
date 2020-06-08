import * as commentsControllers from '../controller/taskcommentsController'
import passport from '../passport/token-verify';
export default (app) => {
  app.post('/task/:id/new', passport.authenticate('jwt', {session:false}), commentsControllers.createComment);
  app.delete('/task/:id/comment/:cid', passport.authenticate('jwt', {session:false}), commentsControllers.deleteComment);
  app.put('/task/:id/comment/:cid', passport.authenticate('jwt', {session:false}), commentsControllers.editComment);
}