import express  from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';
require('dotenv').config()

const router = express.Router();
router.post('/register', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
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
      const token = jwt.sign({
        userId: user.id,
        role: user.role
      },process.env.JWT_KEY, {
        expiresIn: '245hrs'
      })
      return res.status(200).json({success: `logged in ${user.id}`, token: token});
    });
  })(req, res, next)
})

export default router;