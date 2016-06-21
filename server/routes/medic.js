
'use strict';

const express = require('express');
const router = express.Router();
const medicCtrl = require('../controllers/medic');

//medici
router.get('/medici', medicCtrl.getMedici, medicCtrl.jsonMedic);
router.get('/medic/:id', medicCtrl.getMedicById, medicCtrl.jsonMedic);
router.post('/medic', medicCtrl.addMedic, medicCtrl.jsonMedic);
router.put('/medic/:id', medicCtrl.getMedicById, medicCtrl.update, medicCtrl.jsonMedic);
router.delete('/medic/:id', medicCtrl.getMedicById, medicCtrl.deleteMedic, medicCtrl.jsonMedic);

module.exports = router;
