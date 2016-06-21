(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('AdminController', AdminController);

  AdminController.$inject = ['Util','$state', '$scope', '$location', '$anchorScroll'];

  function AdminController(Util, $state, $scope, $location, $anchorScroll) {
    
    $scope.specializations = [];
    $scope.judete = [];
    $scope.locations = [];

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

    $scope.removeSpecialization = function(id) {
      var url = '/api/specialization/'+id;
      Util.delete(url)
        .then(function (result) {
          initializeSpecialization();
        }, function(error) {
          console.log('error',error);
        });
    }

    $scope.removeJudet = function(id) {
      var url = '/api/judet/'+id;
      Util.delete(url)
        .then(function (result) {
          initializeJudete();
        }, function(error) {
          console.log('error',error);
        });
    }  
    $scope.removeLocation = function(id) {
      var url = '/api/location/'+id;
      Util.delete(url)
        .then(function (result) {
          initializeLocations();
        }, function(error) {
          console.log('error',error);
        });
    }
    $scope.findMedic = function() {
      $state.go('medici');
    }
  }
})();
