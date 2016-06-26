'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const _ = require('lodash');

let medicSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  specialization: {
  	type: ObjectId,
  	ref: 'Specialization',
  	required: true
  }, 
  judet: {
  	type: ObjectId,
  	ref: 'Judet',
  	required: true
  },
  location: {
  	type: ObjectId,
  	ref: 'Location',
  	required: true
  },

  rating: {
  	type: Number,
    default: 0
  },
  votes: {
    type: Number,
    default: 0
  },
  totalNrOfVotes: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Medic', medicSchema);
