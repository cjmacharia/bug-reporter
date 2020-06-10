import * as queries from '../utils/commentQueries'
import * as response from '../utils/responses'

export const createComment = async (req, res) => {
  try {
    await queries.createcommentQuery(req, res)  
  } catch(err) {
      await response.serverError(err, res)
  }
}

export const deleteComment = async (req, res) => {
  try {
    await queries.deletecommentQuery(req, res)  
  } catch(err) {
      await response.serverError(err, res)
  }
}

export const editComment = async (req, res) => {
  try {
    await queries.editcommentQuery(req, res)  
  } catch(err) {
      await response.serverError(err, res)
  }
}