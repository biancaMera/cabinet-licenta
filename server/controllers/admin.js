'use strict';

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Specialization = mongoose.model('Specialization');
const Location = mongoose.model('Location');
const Judet = mongoose.model('Judet');

/**
 *  Module exports
 */
module.exports.getSpecializations = getSpecializations;
module.exports.getSpecializationById = getSpecializationById;
module.exports.addSpecialization = addSpecialization;
module.exports.updateSpecialization = updateSpecialization;
module.exports.deleteSpecialization = deleteSpecialization;
module.exports.jsonSpecialization = jsonSpecialization;

//LOCATIONS
module.exports.getLocations = getLocations;
module.exports.getLocationById = getLocationById;
module.exports.addLocation = addLocation;
module.exports.updateLocation = updateLocation;
module.exports.deleteLocation = deleteLocation;
module.exports.jsonLocation = jsonLocation;


//JUDETE

module.exports.getJudete = getJudete;
module.exports.getJudetById = getJudetById;
module.exports.addJudet = addJudet;
module.exports.updateJudet = updateJudet;
module.exports.deleteJudet = deleteJudet;
module.exports.jsonJudet = jsonJudet;

/*SPECIALIZATION*/
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
  console.log(222);
  let specialization = _.pick(req.body, ['name']);

  Specialization.create(specialization, (err, result) => {
    if (err && (11000 === err.code || 11001 === err.code)) {
      return res.status(400).json({ message: 'Name is already in use.' });
    }
    console.log('result', result);
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
  console.log(333);
  res.json(req.resources.specialization);
}

/*END SPECIALIZATION*/

/*LOCATION*/


function updateLocation(req, res, next) {
  let location = req.resources.location;
  let body = _.pick(req.body, ['name']);
  Object.assign(location, body);

  location.save( (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.location = result;
    next();
  });
}

function addLocation(req, res, next) {
  let location = _.pick(req.body, ['name']);

  Location.create(location, (err, result) => {
    if (err && (11000 === err.code || 11001 === err.code)) {
      return res.status(400).json({ message: 'Name is already in use.' });
    }
    req.resources.location = result;
    next();
  });
}

function deleteLocation(req, res, next) {
  let locationId = req.resources.location ? req.resources.location._id : null ;
  Location.remove({_id: locationId}, (err, result) => {
    if (err) {
      return next(err);
    }
    next();
  });
}

function getLocations(req, res, next) {
  Location.find({}, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.location = result;
    next();
  });
}

function getLocationById(req, res, next) {
  let locationId = req.params.id;
  Location.findById(locationId, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.location = result;
    next();
  });
}

function jsonLocation(req, res, next) {
  res.json(req.resources.location);
}


/*END LOCATION*/


/*Judet*/

function updateJudet(req, res, next) {
  let judet = req.resources.judet;
  let body = _.pick(req.body, ['name']);
  Object.assign(judet, body);

  judet.save( (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.judet = result;
    next();
  });
}

function addJudet(req, res, next) {
  let judet = _.pick(req.body, ['name']);

  Judet.create(judet, (err, result) => {
    if (err && (11000 === err.code || 11001 === err.code)) {
      return res.status(400).json({ message: 'Name is already in use.' });
    }
    req.resources.judet = result;
    next();
  });
}

function deleteJudet(req, res, next) {
  let judetId = req.resources.judet ? req.resources.judet._id : null ;
  Judet.remove({_id: judetId}, (err, result) => {
    if (err) {
      return next(err);
    }
    next();
  });
}

function getJudete(req, res, next) {
  Judet.find({}, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.judet = result;
    next();
  });
}

function getJudetById(req, res, next) {
  let judetId = req.params.id;
  Judet.findById(judetId, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.judet = result;
    next();
  });
}

function jsonJudet(req, res, next) {
  res.json(req.resources.judet);
}


/*END Judet*/

