const express = require('express')
const router = express.Router()
const languages = require('../controllers/languages.controller')

//TODO: Add Create, Update, Delete
router.get('/', languages.get)

router.post('/', languages.post)


module.exports = router