'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const _ = require('lodash');

let medicSchema = new Schema({
  name: {
    type: String,
    unique: true,
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
  	type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Medic', medicSchema);
