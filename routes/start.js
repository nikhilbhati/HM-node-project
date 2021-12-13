const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('server reponse working')
})

module.exports = router