(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['Util', 'Login','$state', '$scope', '$location', '$anchorScroll'];

  function HomeController(Util, Login, $state, $scope, $location, $anchorScroll) {
    $scope.medic = {};
    $scope.question = {};

    $scope.user = Login.getLoggedUser();
    
    initializeSpecialization();
    initializeJudete();
    initializeLocations();


    function initializeJudete() {
      var url = '/api/judete';
      Util.get(url)
        .then(function (result) {
          $scope.judete = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }

    function initializeLocations() {
      var url = '/api/locations';
      Util.get(url)
        .then(function (result) {
          $scope.locations = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }

    function initializeSpecialization() {
      var url = '/api/specializations';
      Util.get(url)
        .then(function (result) {
          $scope.specializations = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }

    $scope.addQuestion = function() {
      var url = '/api/question';
      console.log('$scope.user', $scope.user);
      if($scope.user) {
        $scope.question.user = $scope.user._id;
      }
      console.log('$scope.question', $scope.question);
      Util.create(url, $scope.question)
        .then(function (result) {
          $scope.question = {};
        }, function(error) {
          console.log('error',error);
        });
    };
    
    $scope.gotoAnchor = function(id) {
      $location.hash(id);
      $anchorScroll();
    }
    $scope.navigateTo = function(state) {
      $state.go(state);
    };

    $scope.findMedic = function() {
      var queryObj = $scope.medic;
      queryObj.specialization = queryObj.specialization ? queryObj.specialization._id : null;
      queryObj.judet = queryObj.judet ? queryObj.judet._id : null;
      queryObj.location = queryObj.location ? queryObj.location._id : null;
      $state.go('medici', {query: queryObj});
    }    

    $scope.findQuestions = function(userId) {
      var queryObj = {};
      if(userId) {
        queryObj.userId = userId;
      }
      $state.go('questions', {query: queryObj});
    }
  }
})();
