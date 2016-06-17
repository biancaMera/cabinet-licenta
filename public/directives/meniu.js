(function() {
  'use strict';

  angular
  .module('cabinet')
  .directive('meniuDirective', meniuDirective);


  meniuDirective.$inject = ['Login', 'Util',  '$state','$stateParams', '$http', '$location', '$anchorScroll'];

  function meniuDirective(Login,  Util, $state, $stateParams, $http, $location, $anchorScroll) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'views/meniu.html',
      controller: function($scope) {
        $scope.user = Login.getLoggedUser();
        $scope.logOut = function() {
          Util.get('/auth/signout')
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
