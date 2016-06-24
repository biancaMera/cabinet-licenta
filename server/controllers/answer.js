'use strict';

/**
 *  Module dependencies
 */
const _ = require('lodash');
const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');

/**
 *  Module exports
 */
module.exports.addAnswer = addAnswer;
module.exports.update = update;
module.exports.getAnswers = getAnswers;
module.exports.getAnswerById = getAnswerById;
module.exports.deleteAnswer = deleteAnswer;
module.exports.jsonAnswer = jsonAnswer;


function addAnswer(req, res, next) {
  let answer = _.pick(req.body, ['body', 'question']);

  Answer.create(answer, (err, result) => {
    console.log('err', err);
    if(err) {
      return next(err);
    }
    req.resources.answer = result;
    next();
  });
}

function deleteAnswer(req, res, next) {
  let answerId = req.resources.answer ? req.resources.answer._id : null ;
  Answer.remove({_id: answerId}, (err, result) => {
    if (err) {
      return next(err);
    }
    next();
  });
}

function update(req, res, next) {
  let answer = req.resources.answer;
  let body = _.pick(req.body, ['body']);
  Object.assign(answer, body);

  answer.save( (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.answer = result;
    next();
  });
}

function getAnswers(req, res, next) {
  var query = {}

  Answer
  .find(query)
  .populate('user')
  .populate('question')
  .exec((err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.answer = result;
    next();
  });
}

function getAnswerById(req, res, next) {
  let answerId = req.params.id;
  Answer.findById(answerId, (err, result) => {
    if (err) {
      return next(err);
    }
    req.resources.answer = result;
    next();
  });
}

function jsonAnswer(req, res, next) {
  res.json(req.resources.answer);
}
