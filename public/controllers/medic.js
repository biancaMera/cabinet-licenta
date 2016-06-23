(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('MedicController', MedicController);

  MedicController.$inject = ['Util','Login','$state', '$scope', '$location', '$anchorScroll', '$stateParams'];

  function MedicController(Util,Login, $state, $scope, $location, $anchorScroll, $stateParams) {
    $scope.medici = [];
    $scope.user = Login.getLoggedUser();
    var query = $stateParams.query;
    getMedici(query);

    function getMedici(query) {
      var queryUrl = ''
      if(query && query.firstName) {
        queryUrl += '&firstName='+query.firstName;
      }
      if(query && query.lastName) {
        queryUrl += '&lastName='+query.lastName;
      }
      if(query && query.specialization) {
        queryUrl += '&specialization='+query.specialization;
      }      
      if(query && query.location) {
        queryUrl += '&location='+query.location;
      }      
      if(query && query.judet) {
        queryUrl += '&judet='+query.judet;
      }
      var url = '/api/medici?test=0'+ queryUrl;
      Util.get(url)
        .then(function (result) {
          $scope.medici = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }

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
