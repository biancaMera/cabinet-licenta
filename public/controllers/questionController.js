(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('QuestionController', QuestionController);

  QuestionController.$inject = ['Util','$state', '$scope', '$location', '$anchorScroll'];

  function QuestionController(Util, $state, $scope, $location, $anchorScroll) {
    
    $scope.questions = [];
    $scope.answers = [];
    $scope.answer = {};

    initializeQuestions();
    initializeAnswers();

    function initializeAnswers() {
      var url = '/api/answers';
      Util.get(url)
        .then(function (result) {
          $scope.answers = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }

    function initializeQuestions() {
      var url = '/api/questions';
      Util.get(url)
        .then(function (result) {
          $scope.questions = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }


    $scope.addAnswer = function() {
      var url = '/api/answer';
      Util.create(url, $scope.answer)
        .then(function (result) {
          $scope.answer = {};
        }, function(error) {
          console.log('error',error);
        });
    };


    $scope.gotoAnchor = function(id) {
      $location.hash(id);
      $anchorScroll();
    }

    $scope.navigateTo = function(state, id) {
      if(id) {
        $state.go(state,{id: id});
      } else {
        $state.go(state);
      }
    };
    $scope.findMedic = function() {
      $state.go('medici');
    }
  }
})();
