const express = require('express')
const router = express.Router()

const dataController = require('../controllers/dataController')

router.get('/', dataController.mostrar)

 module.exports = router