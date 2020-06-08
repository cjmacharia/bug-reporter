import * as queries from '../utils/storyQueries'
import * as response from '../utils/responses'
export const createStory = async(req, res) => {
  try {
    await queries.createStoryQuery (req, res)  
  } catch(err) {
      await response.serverError(err, res)
  }
}

export const editStory = async(req, res) => {
  try {
    await queries.editStoryQuery (req, res)  
  } catch(err) {
    console.log(err)
      await response.serverError(err, res)
  }
}

export const getStories = async(req, res) => {
  try {
    await queries.getAllStories(req, res)  
  } catch(err) {
    console.log(err)
      await response.serverError(err, res)
  }
}

export const getOneStory = async(req, res) => {
  try {
    await queries.getOneStory (req, res)  
  } catch(err) {
      await response.serverError(err, res)
  }
}

export const deleteStory = async(req, res) => {
  try {
    await queries.deleteStoryQuery (req, res)  
  } catch(err) {
      await response.serverError(err, res)
  }
}


