const express = require('express');
const router  = express.Router();
const Character = require('../models/character')

//List all characters
router.get('/character', (req, res, next)=>{

  Character.find()
  .then((allCharacters)=>{
    res.render('character/listOfCharacters', {characters: allCharacters})
  })
  .catch((err)=>{
    next(err)
  })
})

//Create new character
router.get('/character/create-new-character', (req, res, next)=>{
  res.render('character/newCharacter')
})
//Save creation
router.post('/character/creation', (req, res, next)=>{

})






module.exports = router;
