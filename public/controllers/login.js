(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['Util','Login','$state', '$scope', '$rootScope'];

  function LoginController(Util, Login, $state, $scope, $rootScope) {
    $scope.user = {};
    $scope.registerUser = {};

    $scope.login = function() {
      var urlSignin = '/auth/signin';
      Util.create(urlSignin, $scope.user)
        .then(function success(result) {
          Login.setUser(result.data);
          $scope.user = {};
          $state.go('home');

        }, function error(err) {
          console.log('err', err);
        });
    }

    $scope.register = function() {
      var urlRegister = '/auth/register';
      Util.create(urlRegister, $scope.registerUser)
        .then(function success(result) {
          Login.setUser(result.data);
          $scope.registerUser = {};
          $state.go('home');

        }, function error(err) {
          console.log('err', err);
        }); 
    }

    $scope.navigateTo = function(courseId) {
      $state.go('register');
    };
  }
})();
