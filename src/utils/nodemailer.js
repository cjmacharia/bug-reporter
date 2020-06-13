import jwt from 'jsonwebtoken';
import * as responses from './responses'
import * as queries from './projectQueries'
import nodeMailer from 'nodemailer'
const sendProjectInvite = async (req, res, result) =>  {
let transporter = await nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth:{
    user: 'groundermas@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
})
jwt.sign({
  userId: req.user.id,
}, 
process.env.EMAIL_KEY, {
  expiresIn: '1d'
}, (err, emailtoken) => {
  if(err) {
    responses.validationError(err, res)
  }
  const url = `http://localhost:8080/confirmation/${emailtoken}`;

  let mailOption = {
    to: req.body.invitee,
    subject: `you've been invited bug-tracker project ${result.name}`,
    html: `Please click this email  to accept invite: <a href="${url}">${url}</a>` 
  }
  transporter.sendMail(
    mailOption, (err, info) => {
     if(err) {
       responses.validationError(err, res)
     } else {
    queries.saveAuthorisedProjectUsers(req.body.invitee, res, result)
     }
    
  })
})
}

export default sendProjectInvite;