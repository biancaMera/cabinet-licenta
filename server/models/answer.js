'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const _ = require('lodash');

let answerSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
  	type: ObjectId,
  	ref: 'User'
  },
  question: {
    type: ObjectId,
    ref: 'User',
    required: true
  } ,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Answer', answerSchema);
