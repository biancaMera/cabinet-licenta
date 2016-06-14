(function() {
  'use strict';

  angular
  .module('cabinet')
  .config(config)
  // .directive('onFinishRender', function ($timeout) {
  //   return {
  //     restrict: 'A',
  //     link: function (scope, element, attr) {
  //       if (scope.$last === true) {
  //         $timeout(function () {
  //           scope.$emit(attr.onFinishRender);
  //         });
  //       }
  //     }
  //   };
  // });

  function config($urlRouterProvider, $stateProvider) {
    $stateProvider

     .state('login', {
       url: '/login',
       templateUrl: 'views/login.html',
       controller: 'LoginController as vm'
     })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .state('medici', {
      url: '/medici',
      templateUrl: 'views/medic.html',
      controller: 'MedicController'
    })    
    $urlRouterProvider.otherwise("/login");
  }

})();
