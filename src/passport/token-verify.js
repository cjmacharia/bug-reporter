import {Strategy} from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import User from '../models/User'
require('dotenv').config()

  //VERIFY SECRET USED IS VALID
  passport.use(new Strategy({
    //secret used to sign our jwt
    secretOrKey: process.env.JWT_KEY,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
  }, async (token, done) =>  {
    User.findOne({_id: token.userId}).then(user => {
      done(null, user, {user: user})
    }).catch(err => {
      done(err, false, {error: error});
    })
  }))

  export default passport;