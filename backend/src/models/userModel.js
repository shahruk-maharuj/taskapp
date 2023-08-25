const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  photo: {
    type: String,
    default: 'default.jpg', // You can set a default image path here
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
