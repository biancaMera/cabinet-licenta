'use strict';

const express = require('express');
const router = express.Router();
const answerCtrl = require('../controllers/answer');

//answers
router.get('/answers', answerCtrl.getAnswers, answerCtrl.jsonAnswer);
router.get('/answer/:id', answerCtrl.getAnswerById, answerCtrl.jsonAnswer);
router.post('/answer', answerCtrl.addAnswer, answerCtrl.jsonAnswer);
router.put('/answer/:id', answerCtrl.getAnswerById, answerCtrl.update, answerCtrl.jsonAnswer);
router.delete('/answer/:id', answerCtrl.getAnswerById, answerCtrl.deleteAnswer, answerCtrl.jsonAnswer);

module.exports = router;
