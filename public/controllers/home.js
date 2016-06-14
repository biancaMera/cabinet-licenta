(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['Login','$state', '$scope', '$location', '$anchorScroll'];

  function HomeController(Login, $state, $scope, $location, $anchorScroll) {
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
