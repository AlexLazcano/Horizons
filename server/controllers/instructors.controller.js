const instructors = require('../services/instructors.service')

const get = async (req, res) => {
    try{
        const result = await instructors.getInstructors()

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}

const post = async (req, res) => {
    try {
        const result = await instructors.createInstructor(req.body)

        res.json(result)
    }
    catch (err){
        console.error(err)
    }
}
const remove = async (req, res) => {
    try {
      const result = await instructors.deleteInstructor(req.params.id)
  
      res.json(result)
    } catch (error) {
      console.log(error)
    }
  }

module.exports = {
    get,
    post,
    remove
} 