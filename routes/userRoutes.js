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
  successRedirect: "/",
  failureRedirect: "/test",
  failureFlash: true,
  passReqToCallback: true
}));

//Logout
router.post('/logout', (req, res, next)=>{
  req.session.destroy();
  res.redirect('/')
})

//Google
router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email"
    ]
  })
);
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/account/login" // here you would redirect to the login page using traditional login approach
  })
);



module.exports = router