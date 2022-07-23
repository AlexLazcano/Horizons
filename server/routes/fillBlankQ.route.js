const express = require('express')
const router = express.Router()
const fillBlankQs = require('../controllers/fillBlankQ.controller')

//TODO: Add Create, Update, Delete
router.get('/', fillBlankQs.get)

router.post('/', fillBlankQs.post)

router.delete('/:id', fillBlankQs.remove)

router.patch('/:id', fillBlankQs.patch)

router.get('/ids', fillBlankQs.getIds)


module.exports = router