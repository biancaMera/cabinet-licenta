(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('QuestionController', QuestionController);

  QuestionController.$inject = ['Util','$state', '$scope', '$location', '$anchorScroll'];

  function QuestionController(Util, $state, $scope, $location, $anchorScroll) {
    
    $scope.questions = [];
    $scope.answer = {};

    initializeQuestionsAnswers();

    function initializeQuestionsAnswers() {
      var url = '/api/questions/answers';
      Util.get(url)
        .then(function (result) {
          $scope.questions = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }


    $scope.addAnswer = function(questionId) {
      var url = '/api/answer';
      $scope.answer[questionId].question = questionId;
      Util.create(url, $scope.answer[questionId])
        .then(function (result) {
          $scope.answer = {};
          initializeQuestionsAnswers();
        }, function(error) {
          console.log('error',error);
        });
    };

    $scope.navigateTo = function(state, id) {
      if(id) {
        $state.go(state,{id: id});
      } else {
        $state.go(state);
      }
    };
  }
})();
