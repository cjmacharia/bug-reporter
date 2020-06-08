import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from './src/passport/setup';
// import { Strategy } from 'passport-google-oauth2'
// import ids from './oauth'
import storyRoutes from './src/routes/task'
import commentsRoutes from './src/routes/comments'

import auth from './src/routes/auth'
import session from 'express-session';
import connectMongo from 'connect-mongo'
const MongoStore = connectMongo(session);
require('dotenv').config()
const app = express();
app.use(bodyParser.json())
storyRoutes(app)
commentsRoutes(app)
//EXPRESS Session
// app.use(session ({
//   secret: 'this is a secret',
//   resave: false,
//   saveUninitialized: true,
//   store: new MongoStore({mongooseConnection: mongoose.connection})
// }));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use('/', auth)

const port = process.env.PORT|| 8080;
  let dbUrl = `mongodb+srv://cjmash:${process.env.DB_PASSWORD}@bugreporter-kyxqf.gcp.mongodb.net/test?retryWrites=true&w=majority`;

  mongoose.connect(dbUrl,{ 
  useNewUrlParser: true, useFindAndModify: false }).then(() => console.log('connected')).catch((err) => console.log(err));
app.listen(port, () => {

})
export default app;
