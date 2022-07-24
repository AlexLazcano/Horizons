const express = require('express')
const router = express.Router()
const taughtBy = require('../controllers/taughtBy.controller')

//TODO: Add Create, Update, Delete
router.get('/', taughtBy.get)

router.post('/', taughtBy.post)

router.delete('/:id/:id2', taughtBy.remove)

router.get('/rows', taughtBy.getRows)


module.exports = router