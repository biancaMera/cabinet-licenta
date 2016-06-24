'use strict';

const express = require('express');
const router = express.Router();
const questionCtrl = require('../controllers/question');

//questions
router.get('/questions', questionCtrl.getQuestions, questionCtrl.jsonQuestion);
router.get('/question/:id', questionCtrl.getQuestionById, questionCtrl.jsonQuestion);
router.post('/question', questionCtrl.addQuestion, questionCtrl.jsonQuestion);
router.put('/question/:id', questionCtrl.getQuestionById, questionCtrl.update, questionCtrl.jsonQuestion);
router.delete('/question/:id', questionCtrl.getQuestionById, questionCtrl.deleteQuestion, questionCtrl.jsonQuestion);

module.exports = router;
