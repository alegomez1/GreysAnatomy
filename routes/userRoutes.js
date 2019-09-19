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

})



module.exports = router