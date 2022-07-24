const express = require('express')
const router = express.Router()
const groups = require('../controllers/groups.controller')

//TODO: Add Create, Update, Delete
router.get('/', groups.get)

router.post('/', groups.post)

router.delete('/:id', groups.remove)

router.patch('/:id', groups.patch)

router.get('/ids', groups.getIds)

router.get('/rows', groups.getRows)


module.exports = router 