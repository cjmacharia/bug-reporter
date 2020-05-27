import express  from 'express';
import passport from 'passport';
const router = express.Router();
router.post('/register', (req, res, next) => {
  let cj = passport.authenticate('local', (err, user, info) => {
    if(info) {
      return res.status(401).json({error: info})
    }
    if(err) {
      return res.status(400).json({error: err})
    }
    if(!user) {
      return res.status(400).json({error: 'no user found'})
    }
    req.logIn(user, (err) => {
      if(err) {
        return res.status(400).json({error: err})
      }
      return res.status(200).json({success: `logged in ${user.id}`});
    });
  })(req, res, next)
})

export default router;