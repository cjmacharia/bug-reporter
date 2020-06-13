import * as queries from '../utils/projectQueries'
import * as response from '../utils/responses'
import jwt from 'jsonwebtoken'
export const createProject = async (req, res) => {
  try {
    await queries.createProjectQuery(req, res)  
  } catch(err) {
      await response.serverError(err, res)
  }
}
export const sendJoinEmail = async (req, res) => {
  try {
    await queries.SendEmailQuery(req, res)  
  } catch(err) {
      await response.serverError(err, res)
  }
}

export const verifyprojectInvite = async (req, res) => {
  try {
    await jwt.verify(req.params.token, process.env.EMAIL_KEY)
    const tokenDetails = await jwt.decode(req.params.token, {complete: true})
    await queries.projectInviteAccepted(req, res, tokenDetails)
  } catch(err) {
    await response.serverError(err, res)
  }
}