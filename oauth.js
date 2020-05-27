require('dotenv').config()
const  ids = {
  google: {
    clientID: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
  }
}

export default ids;