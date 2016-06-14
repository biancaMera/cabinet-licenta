(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('MedicController', MedicController);

  MedicController.$inject = ['Login','$state', '$scope', '$location', '$anchorScroll'];

  function MedicController(Login, $state, $scope, $location, $anchorScroll) {
    $scope.gotoAnchor = function(id) {
      $location.hash(id);
      $anchorScroll();
    }

    $scope.navigateTo = function(state) {
      $state.go(state);
    };

    $scope.onRating = function(rating) {
      console.log('rating', rating);
    }
  }
})();
