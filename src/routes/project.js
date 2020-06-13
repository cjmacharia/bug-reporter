import * as projectController from '../controller/ProjectController'
import passport from '../passport/token-verify';
import  validateOwner from '../utils/validateOwnerMiddleware'
export default (app) => {
  app.post('/new/project', passport.authenticate('jwt', {session:false}), projectController.createProject);
  app.post('/:pid/sendemail', passport.authenticate('jwt', {session:false}), projectController.sendJoinEmail);
  app.get('/confirmation/:token',  projectController.verifyprojectInvite);


}