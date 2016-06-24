'use strict';

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Question = mongoose.model('Question');

/**
 *  Module exports
 */
module.exports.addQuestion = addQuestion;
module.exports.update = update;
module.exports.getQuestions = getQuestions;
module.exports.getQuestionById = getQuestionById;
module.exports.deleteQuestion = deleteQuestion;
module.exports.jsonQuestion = jsonQuestion;
module.exports.formatQuestionsAnswers = formatQuestionsAnswers;


function formatQuestionsAnswers(req, res, next) {
  let questions = req.resources.question;
  let answers = req.resources.answer;

  let format = {};

  for(let i = 0; i < questions.length; i++) {
    let data = questions[i].toObject();;

    data.answers = [];
    console.log('data', data);
    format[data._id] = data;
  }
  for(let i = 0; i < answers.length; i++) {
    let data = answers[i].toObject();
    let questionId = data.question._id;
    delete data.question;
    format[questionId].answers.push(data);
  }

  req.resources.question = format;
  console.log('format', format);

  next();
}

function addQuestion(req, res, next) {
  let question = _.pick(req.body, ['body']);

  Question.create(question, (err, result) => {
    console.log('err', err);
    if(err) {
      return next(err);
    }
    req.resources.question = result;
    next();
  });
}

function deleteQuestion(req, res, next) {
  let questionId = req.resources.question ? req.resources.question._id : null ;
  Question.remove({_id: questionId}, (err, result) => {
    if (err) {
      return next(err);
    }
    next();
  });
}

function update(req, res, next) {
  let question = req.resources.question;
  let body = _.pick(req.body, ['body']);
  Object.assign(question, body);

  question.save( (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.question = result;
    next();
  });
}

function getQuestions(req, res, next) {
  var query = {}

  Question
  .find(query)
  .populate('user')
  .exec((err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.question = result;
    next();
  });
}

function getQuestionById(req, res, next) {
  let questionId = req.params.id;
  Question.findById(questionId, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.question = result;
    next();
  });
}

function jsonQuestion(req, res, next) {
  res.json(req.resources.question);
}
