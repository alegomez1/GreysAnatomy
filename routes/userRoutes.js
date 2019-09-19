const express = require('express');
const router = express.Router();
const Character = require('../models/character')

router.get('/account/signup', (req,res,next)=>{
  res.render('account/signup')
  
})



module.exports = router