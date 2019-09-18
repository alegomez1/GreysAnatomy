const express = require('express');
const router = express.Router();
const Character = require('../models/character')

//List all characters
router.get('/character', (req, res, next) => {

  Character.find()
    .then((allCharacters) => {
      res.render('character/listOfCharacters', {
        characters: allCharacters
      })
    })
    .catch((err) => {
      next(err)
    })
})

//Create new character
router.get('/character/create-new-character', (req, res, next) => {
  res.render('character/newCharacter')
})
//Save creation
router.post('/character/creation', (req, res, next) => {

  let firstName   = req.body.firstName;
  let lastName    = req.body.lastName;
  let image       = req.body.image

  Character.create({
    firstName:  firstName,
    lastName:   lastName,
    image:      image
  })
  .then((result)=>{
    res.redirect('/character')
  })
})







module.exports = router;