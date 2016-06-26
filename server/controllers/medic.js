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
  let medic = _.pick(req.body, ['firstName', 'lastName', 'specialization', 'judet', 'location', 'rating']);

  Medic.create(medic, (err, result) => {
    console.log('err', err);
    if(err) {
      return next(err);
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
  let body = _.pick(req.body, ['firstName', 'lastName', 'specialization', 'judet', 'location', 'rating']);
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
  var query = {}
  var firstName = req.query.firstName;
  var lastName = req.query.lastName;
  var specialization = req.query.specialization;
  var location = req.query.location;
  var judet = req.query.judet;


  if(firstName) {
    let r = new RegExp(firstName, "i");
    query.firstName = r;
  }

  if(lastName) {
    let r = new RegExp(lastName, "i");
    query.lastName = r;
  }


  if(specialization) {
    query.specialization = specialization
  }
  if(location) {
    query.location = location
  }
  if(judet) {
    query.judet = judet
  }

  console.log('query', query);


  Medic
  .find(query)
  .populate('specialization')
  .populate('judet')
  .populate('location')
  .exec((err, result) => {
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
