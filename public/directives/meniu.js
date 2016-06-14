(function() {
  'use strict';

  angular
  .module('cabinet')
  .directive('meniuDirective', meniuDirective);


  meniuDirective.$inject = ['Login', '$state','$stateParams', '$http', '$location', '$anchorScroll'];

  function meniuDirective(Login, $state, $stateParams, $http, $location, $anchorScroll) {
    return {
      restrict: 'E',
      // controllerAs: 'vm',
      // bindToController: true,
      scope: {},
      templateUrl: 'views/meniu.html',
      controller: function($scope) {
        var vm = this;
        $scope.user = Login.getLoggedUser();
        $scope.logOut = function() {
          Login.get('/signout')
            .then(function success(result) {
              Login.destroyUser();
              $scope.user = Login.getLoggedUser();
              $state.go('login');
            });
        }

        $scope.navigateTo = function(state) {
          $state.go(state);
        };

        $scope.gotoAnchor = function(id) {
          $location.hash(id);
          $anchorScroll();
        }
      }
    }
  }
})();
