import * as queries from '../utils/projectQueries'
import * as response from '../utils/responses'

export const createProject = async (req, res) => {
  try {
    await queries.createProjectQuery(req, res)  
  } catch(err) {
    console.log(err)
      await response.serverError(err, res)
  }
}
