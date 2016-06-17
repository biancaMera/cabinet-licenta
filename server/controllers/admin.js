'use strict';

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Specialization = mongoose.model('Specialization');

/**
 *  Module exports
 */
module.exports.getSpecializations = getSpecializations;
module.exports.getSpecializationById = getSpecializationById;
module.exports.addSpecialization = addSpecialization;
module.exports.updateSpecialization = updateSpecialization;
module.exports.deleteSpecialization = deleteSpecialization;
module.exports.jsonSpecialization = jsonSpecialization;

function updateSpecialization(req, res, next) {
  let specialization = req.resources.specialization;
  let body = _.pick(req.body, ['name']);
  Object.assign(specialization, body);

  specialization.save( (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.specialization = result;
    next();
  });
}

function addSpecialization(req, res, next) {
  let specialization = _.pick(req.body, ['name']);

  Specialization.create(specialization, (err, result) => {
    if (err && (11000 === err.code || 11001 === err.code)) {
      return res.status(400).json({ message: 'Name is already in use.' });
    }
    req.resources.specialization = result;
    next();
  });
}

function deleteSpecialization(req, res, next) {
  let specializationId = req.resources.specialization ? req.resources.specialization._id : null ;
  Specialization.remove({_id: specializationId}, (err, result) => {
    if (err) {
      return next(err);
    }
    next();
  });
}

function getSpecializations(req, res, next) {
  Specialization.find({}, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.specialization = result;
    next();
  });
}

function getSpecializationById(req, res, next) {
  let specializationId = req.params.id;
  Specialization.findById(specializationId, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.specialization = result;
    next();
  });
}

function jsonSpecialization(req, res, next) {
  res.json(req.resources.specialization);
}
