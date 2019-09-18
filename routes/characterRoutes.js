const express = require('express');
const router  = express.Router();
const Character = require('../models/character')

//List all characters
router.get('/characters', (req, res, next)=>{
  console.log('WORKING')
  res.render('character/listOfCharacters')
})






module.exports = router;
