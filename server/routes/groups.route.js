const express = require('express')
const router = express.Router()
const groups = require('../controllers/groups.controller')

//TODO: Add Create, Update, Delete
router.get('/', groups.get)

router.post('/', groups.post)


module.exports = router 