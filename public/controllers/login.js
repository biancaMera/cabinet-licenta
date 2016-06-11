(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('LoginController', LoginController);

  LoginController.$inject = ['Util','Login','$state', '$scope'];

  function LoginController(Util, Login, $state, $scope) {
    var vm = this;
    vm.user = {};
    vm.login = function() {
      Util.create('/signin', vm.user)
        .then(function success(result) {
          Login.setUser(result.data);
          vm.user = {};
          $state.go('home');

        }, function error(err) {
          console.log('err', err);
        });
    }

    vm.navigateTo = function(courseId) {
      $state.go('register');
    };
  }
})();
