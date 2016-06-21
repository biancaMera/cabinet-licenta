'use strict';

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Medic = mongoose.model('Medic');

/**
 *  Module exports
 */
module.exports.addMedic = addMedic;
module.exports.update = update;
module.exports.getMedici = getMedici;
module.exports.getMedicById = getMedicById;
module.exports.deleteMedic = deleteMedic;
module.exports.jsonMedic = jsonMedic;


function addMedic(req, res, next) {
  let medic = _.pick(req.body, ['name']);

  Medic.create(medic, (err, result) => {
    if (err && (11000 === err.code || 11001 === err.code)) {
      return res.status(400).json({ message: 'Name is already in use.' });
    }
    req.resources.medic = result;
    next();
  });
}

function deleteMedic(req, res, next) {
  let medicId = req.resources.medic ? req.resources.medic._id : null ;
  Medic.remove({_id: medicId}, (err, result) => {
    if (err) {
      return next(err);
    }
    next();
  });
}

function update(req, res, next) {
  let medic = req.resources.medic;
  let body = _.pick(req.body, ['name']);
  Object.assign(medic, body);

  medic.save( (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.medic = result;
    next();
  });
}

function getMedici(req, res, next) {
  Medic.find({}, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.medic = result;
    next();
  });
}

function getMedicById(req, res, next) {
  let medicId = req.params.id;
  Medic.findById(medicId, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.medic = result;
    next();
  });
}

function jsonMedic(req, res, next) {
  res.json(req.resources.medic);
}
