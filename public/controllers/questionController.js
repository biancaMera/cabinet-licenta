(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('QuestionController', QuestionController);

  QuestionController.$inject = ['Util','$state', '$scope', '$location', '$anchorScroll', '$stateParams'];

  function QuestionController(Util, $state, $scope, $location, $anchorScroll, $stateParams) {
    
    $scope.questions = [];
    $scope.answer = {};
    var query = $stateParams.query;
    var searchUrl='';
    var userId;
    if(query && query.userId) {
      userId = query.userId;
      searchUrl = '?userId=' + userId;
    }
    initializeQuestionsAnswers();

    function initializeQuestionsAnswers() {
      var url = '/api/questions/answers';
      if(searchUrl) {
        url += searchUrl;
      }
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
