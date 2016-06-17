(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('AdminController', AdminController);

  AdminController.$inject = ['Util','$state', '$scope', '$location', '$anchorScroll'];

  function AdminController(Util, $state, $scope, $location, $anchorScroll) {
    
    $scope.specializations = [];
    function initializeSpecialization() {
      var url = '/api/specializations';
      Util.get(url)
        .then(function (result) {
          console.log('result', result);
          $scope.specializations = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }

    initializeSpecialization();


    $scope.gotoAnchor = function(id) {
      $location.hash(id);
      $anchorScroll();
    }
    $scope.navigateTo = function(state) {
      $state.go(state);
    };

    $scope.findMedic = function() {
      $state.go('medici');
    }
  }
})();
