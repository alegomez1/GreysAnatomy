const express = require('express');
const router = express.Router();
const Character = require('../models/character')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const passport = require('passport')

//Sign up page
router.get('/account/signup', (req,res,next)=>{
  res.render('account/signup')
})

//Save sign up creation
router.post('/account/signup', (req, res, next)=>{
  const username = req.body.theUsername;
  const password = req.body.thePassword;

  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)

  User.create({
    username: username,
    password: hash
  })
  .then((result)=>{
    res.redirect('/')
  })
  .catch((err)=>{
    next(err)
  })
})

//Login Page
router.get('/account/login', (req, res, next)=>{
  res.render('account/login')
})

router.post("/account/login", passport.authenticate("local", {
  successRedirect: "/account/signup",
  failureRedirect: "/account/login",
  failureFlash: true,
  passReqToCallback: true
}));



module.exports = router