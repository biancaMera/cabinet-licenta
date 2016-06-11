
(function() {
  'use strict';

  angular
  .module('cabinet')
  .factory('Login', Login);

  Login.$inject = ['$http', '$window'];

  function Login($http, $window) {
    var factory = {};

    factory.setUser = function(user) {
      $window.sessionStorage.user = JSON.stringify(user);
    }

    factory.getLoggedUser = function() {
      return JSON.parse($window.sessionStorage.user || null);
    }

    factory.destroyUser = function() {
      return $window.sessionStorage.user = '';
    }

    return factory;
  }
})();
