
'use strict';

const express = require('express');
const router = express.Router();
const adminCtrl = require('../controllers/admin');

router.get('/specializations', adminCtrl.getSpecializations, adminCtrl.jsonSpecialization);
router.get('/specialization/:id', adminCtrl.getSpecializationById, adminCtrl.jsonSpecialization);
router.post('/specialization', adminCtrl.addSpecialization, adminCtrl.jsonSpecialization);
router.put('/specialization/:id', adminCtrl.getSpecializationById, adminCtrl.updateSpecialization, adminCtrl.jsonSpecialization);
router.delete('/specialization/:id', adminCtrl.getSpecializationById, adminCtrl.deleteSpecialization, adminCtrl.jsonSpecialization);


module.exports = router;
