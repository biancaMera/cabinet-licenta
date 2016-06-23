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
       controller: 'LoginController'
     })
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .state('medici', {
      url: '/medici',
      templateUrl: 'views/medic.html',
      controller: 'MedicController',
      params: {query: null}, 
    }) 
    .state('admin', {
      url: '/admin',
      templateUrl: 'views/adaugare-admin.html',
      controller: 'AdminController'
    })
    .state('adminSpecializari', {
      url: '/adminSpecializari',
      templateUrl: 'views/adminSpecializari.html',
      controller: 'AdminSpecializari'
    })
    .state('adminSpecializariEdit', {
      url: '/adminSpecializari/:id',
      templateUrl: 'views/adminSpecializari.html',
      controller: 'AdminSpecializari'
    })  
    .state('adminJudete', {
      url: '/adminJudete',
      templateUrl: 'views/adminJudete.html',
      controller: 'AdminJudete'
    })
    .state('adminJudeteEdit', {
      url: '/adminJudete/:id',
      templateUrl: 'views/adminJudete.html',
      controller: 'AdminJudete'
    })  
    .state('adminLocation', {
      url: '/adminLocation',
      templateUrl: 'views/adminLocation.html',
      controller: 'AdminLocation'
    })
    .state('adminLocationEdit', {
      url: '/adminLocation/:id',
      templateUrl: 'views/adminLocation.html',
      controller: 'AdminLocation'
    })
    .state('addMedic', {
      url: '/addMedic',
      templateUrl: 'views/addMedic.html',
      controller: 'addMedicController'
    }) 
    $urlRouterProvider.otherwise("/login");
  }

})();
