const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const characterSchema= new Schema({
  firstName: String,
  lastName: String,
  image: String,
  bio: String
})

const Character = mongoose.model('Character', characterSchema)

module.exports = Character