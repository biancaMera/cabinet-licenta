
'use strict';

const express = require('express');
const router = express.Router();
const authCtrl = require('../controllers/authentication');
const userCtrl = require('../controllers/user');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

router.put('/user/:id', userCtrl.getUserById, userCtrl.update, userCtrl.jsonUser);
router.get('/users', userCtrl.getUsers, userCtrl.jsonUser);
router.get('/user/:id', userCtrl.getUserById, userCtrl.jsonUser);


module.exports = router;
