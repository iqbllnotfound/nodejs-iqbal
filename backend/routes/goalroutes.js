const express = require('express')
const router = express.Router()
const {getGoals,setGoals} = require ("../controllers/goalcontrollers")

router.get('/',getGoals)

router.post('/',setGoals)

router.put('/',(req,res) => {
    res.json({
        message: "menambahkan method put"
    })    
})

module.exports = router