import User from '../models/User';
import bycrpt from 'bcryptjs';
import passport from 'passport';
import { Strategy } from 'passport-local';
import * as response from '../utils/responses.js'

require('dotenv').config()
// the user id is saved in the session and later used o retrieve the whole object via the deserializer
//serializeUser determines which date of the user object should be stored in teh session 
  //VERIFY SECRET USED IS VALID

passport.serializeUser((user, done) => {
  done (null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

//local Straegy

passport.use(new Strategy({usernameField: 'email'}, (email, password, done) => {
  User.findOne({email: email})
    .then(user => {
      if(!user) {
        const newUser = new User({email, password});
        bycrpt.genSalt(10, (err, salt) => {
          bycrpt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash
            newUser.save()
            .then(user => {
              return done(null, user);
            }).catch(err => {
              return done(null, false, {message: err });
            });
          });
        });
      }  else {
        bycrpt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if(isMatch) {
             done(null, user);
          } else {
             done(null, false, {message: 'wrong password'})
          }
        })
      }
    }).catch(err => {
      return done(null, false, {message: err})
    })
}))


export default passport;