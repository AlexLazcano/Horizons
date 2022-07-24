const express = require('express')
const router = express.Router()
const listeningqs = require('../controllers/listeningQ.controller')

//TODO: Add Create, Update, Delete
router.get('/', listeningqs.get)

router.post('/', listeningqs.post)

router.delete('/:id', listeningqs.remove)

router.get('/rows', listeningqs.getRows)


module.exports = router