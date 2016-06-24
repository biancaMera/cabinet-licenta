'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const _ = require('lodash');

let questionSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
  	type: ObjectId,
  	ref: 'User'
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Question', questionSchema);
