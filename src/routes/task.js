import * as taskControllers from '../controller/taskController'
import passport from '../passport/token-verify';
export default (app) => {
  app.post('/new/task', passport.authenticate('jwt', {session:false}), taskControllers.createStory);
  app.put('/task/:id', passport.authenticate('jwt', {session:false}), taskControllers.editStory);
  app.delete('/task/:id', passport.authenticate('jwt', {session:false}), taskControllers.deleteStory);
  app.get('/tasks', passport.authenticate('jwt', {session:false}), taskControllers.getStories);
  app.get('/task/:id', passport.authenticate('jwt', {session:false}), taskControllers.getOneStory);

}