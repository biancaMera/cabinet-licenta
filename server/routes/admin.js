
'use strict';

const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');


//SPECIALIZATIONS
router.get('/specializations', adminCtrl.getSpecializations, adminCtrl.jsonSpecialization);
router.get('/specialization/:id', adminCtrl.getSpecializationById, adminCtrl.jsonSpecialization);
router.post('/specialization', authentication.ensured, authorization.isAdmin, adminCtrl.addSpecialization, adminCtrl.jsonSpecialization);
router.put('/specialization/:id',authentication.ensured, authorization.isAdmin, adminCtrl.getSpecializationById, adminCtrl.updateSpecialization, adminCtrl.jsonSpecialization);
router.delete('/specialization/:id',authentication.ensured, authorization.isAdmin, adminCtrl.getSpecializationById, adminCtrl.deleteSpecialization, adminCtrl.jsonSpecialization);

//LOCATIONS
router.get('/locations', adminCtrl.getLocations, adminCtrl.jsonLocation);
router.get('/location/:id', adminCtrl.getLocationById, adminCtrl.jsonLocation);
router.post('/location', authentication.ensured, authorization.isAdmin, adminCtrl.addLocation, adminCtrl.jsonLocation);
router.put('/location/:id', authentication.ensured, authorization.isAdmin, adminCtrl.getLocationById, adminCtrl.updateLocation, adminCtrl.jsonLocation);
router.delete('/location/:id', authentication.ensured, authorization.isAdmin, adminCtrl.getLocationById, adminCtrl.deleteLocation, adminCtrl.jsonLocation);

//JUDETE
router.get('/judete', adminCtrl.getJudete, adminCtrl.jsonJudet);
router.get('/judet/:id', adminCtrl.getJudetById, adminCtrl.jsonJudet);
router.post('/judet', authentication.ensured, authorization.isAdmin, adminCtrl.addJudet, adminCtrl.jsonJudet);
router.put('/judet/:id', authentication.ensured, authorization.isAdmin, adminCtrl.getJudetById, adminCtrl.updateJudet, adminCtrl.jsonJudet);
router.delete('/judet/:id', authentication.ensured, authorization.isAdmin, adminCtrl.getJudetById, adminCtrl.deleteJudet, adminCtrl.jsonJudet);
module.exports = router;
