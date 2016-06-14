(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('AdminController', AdminController);

  AdminController.$inject = ['Login','$state', '$scope', '$location', '$anchorScroll'];

  function AdminController(Login, $state, $scope, $location, $anchorScroll) {
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
