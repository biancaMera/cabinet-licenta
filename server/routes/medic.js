
'use strict';

const express = require('express');
const router = express.Router();
const medicCtrl = require('../controllers/medic');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');
//medici
router.get('/medici', medicCtrl.getMedici, medicCtrl.jsonMedic);
router.get('/medic/:id', medicCtrl.getMedicById, medicCtrl.jsonMedic);
router.post('/medic', authentication.ensured, authorization.isAdmin, medicCtrl.addMedic, medicCtrl.jsonMedic);
router.put('/medic/:id', authentication.ensured, authorization.isAdmin,medicCtrl.getMedicById, medicCtrl.update, medicCtrl.jsonMedic);
router.put('/medic/rating/:id', authentication.ensured,medicCtrl.getMedicById, medicCtrl.updateRating, medicCtrl.jsonMedic);
router.delete('/medic/:id', authentication.ensured, authorization.isAdmin, medicCtrl.getMedicById, medicCtrl.deleteMedic, medicCtrl.jsonMedic);

module.exports = router;
