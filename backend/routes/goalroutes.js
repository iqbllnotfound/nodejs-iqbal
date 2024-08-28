const express = require('express')
const router = express.Router()
const {getGoals,setGoals} = require ("../controllers/goalcontrollers")

router.get('/',getGoals)

router.get('/',setGoals)

//router.put

module.exports = router