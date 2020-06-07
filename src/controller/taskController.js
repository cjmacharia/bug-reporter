import * as queries from '../utils/queries'
import * as response from '../utils/responses'
export const createStory = async(req, res) => {
  try {
    await queries.createStoryQuery (res, req)  
  } catch(err) {
      await response.serverError(res, err)
  }
}

export const editStory = async(req, res) => {
  try {
    await queries.editStoryQuery (req, res)  
  } catch(err) {
    console.log(err)
      await response.serverError(res, err)
  }
}

export const getStories = async(req, res) => {
  try {
    await queries.getAllStories(req, res)  
  } catch(err) {
    console.log(err)
      await response.serverError(res, err)
  }
}

export const getOneStory = async(req, res) => {
  try {
    await queries.getOneStory (req, res)  
  } catch(err) {
      await response.serverError(res, err)
  }
}

export const deleteStory = async(req, res) => {
  try {
    await queries.deleteStoryQuery (req, res)  
  } catch(err) {
      await response.serverError(res, err)
  }
}

