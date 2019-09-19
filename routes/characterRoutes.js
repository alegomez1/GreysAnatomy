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
  let bio         = req.body.bio;
  let image       = req.body.image

  Character.create({
    firstName:  firstName,
    lastName:   lastName,
    bio:        bio,
    image:      image
  })
  .then((result)=>{
    res.redirect('/character')
  })
})

//Details Page
router.get('/character/details/:id', (req, res, next)=>{
  let id = req.params.id
  Character.findById(id)
  .then((characterObject)=>{
    res.render('character/detailsPage', {thatCharacter: characterObject})
  })
  .catch((err)=>{
    next(err)
  })
})

//Delete Section
router.post('/character/delete/:id', (req,res,next)=>{
  let id = req.params.id
  Character.findOneAndRemove(id)
  .then((result)=>{
    res.redirect('/character')
  })
})







module.exports = router;