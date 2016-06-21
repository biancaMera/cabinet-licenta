(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('addMedicController', addMedicController);

  addMedicController.$inject = ['Util','$state', '$scope', '$location', '$anchorScroll'];

  function addMedicController(Util, $state, $scope, $location, $anchorScroll) {
    $scope.medic = {};

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

    $scope.addMedic = function() {
      var url = '/api/medic/';
      console.log($scope.medic);
      // Util.create(url, $scope.medic)
      //   .then(function(result) {
      //     $scope.medic = {};
      //   }, function(error) {
      //     console('error');
      //   })
    }

    $scope.navigateTo = function(state) {
      $state.go(state);
    };
  }
})();
