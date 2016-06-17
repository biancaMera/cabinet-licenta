
'use strict';

const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin');

//SPECIALIZATIONS
router.get('/specializations', adminCtrl.getSpecializations, adminCtrl.jsonSpecialization);
router.get('/specialization/:id', adminCtrl.getSpecializationById, adminCtrl.jsonSpecialization);
router.post('/specialization', adminCtrl.addSpecialization, adminCtrl.jsonSpecialization);
router.put('/specialization/:id', adminCtrl.getSpecializationById, adminCtrl.updateSpecialization, adminCtrl.jsonSpecialization);
router.delete('/specialization/:id', adminCtrl.getSpecializationById, adminCtrl.deleteSpecialization, adminCtrl.jsonSpecialization);

//LOCATIONS
router.get('/locations', adminCtrl.getLocations, adminCtrl.jsonLocation);
router.get('/location/:id', adminCtrl.getLocationById, adminCtrl.jsonLocation);
router.post('/location', adminCtrl.addLocation, adminCtrl.jsonLocation);
router.put('/location/:id', adminCtrl.getLocationById, adminCtrl.updateLocation, adminCtrl.jsonLocation);
router.delete('/location/:id', adminCtrl.getLocationById, adminCtrl.deleteLocation, adminCtrl.jsonLocation);

//JUDETE
router.get('/judete', adminCtrl.getJudete, adminCtrl.jsonJudet);
router.get('/judet/:id', adminCtrl.getJudetById, adminCtrl.jsonJudet);
router.post('/judet', adminCtrl.addJudet, adminCtrl.jsonJudet);
router.put('/judet/:id', adminCtrl.getJudetById, adminCtrl.updateJudet, adminCtrl.jsonJudet);
router.delete('/judet/:id', adminCtrl.getJudetById, adminCtrl.deleteJudet, adminCtrl.jsonJudet);
module.exports = router;
