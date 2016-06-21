(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('AdminLocation', AdminLocation);

  AdminLocation.$inject = ['Util','$state', '$scope', '$location', '$anchorScroll'];

  function AdminLocation(Util, $state, $scope, $location, $anchorScroll) {
    
    var locationId;
    $scope.isEditPage = false;

    $scope.location = {};
    if($state.params.id) {
      locationId = $state.params.id
      initializeLocation();
      $scope.isEditPage = true;
    }


    function initializeLocation() {
      var url = '/api/location/'+locationId;
      Util.get(url)
        .then(function (result) {
          $scope.location = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }

    $scope.addLocation = function() {
      var url = '/api/location/';
      Util.create(url, $scope.location)
        .then(function(result) {
          $scope.location = {};
        }, function(error) {
          console('error');
        })
    }

    $scope.editLocation = function(id) {
      var url = '/api/location/' + id
      Util.update(url, $scope.location)
        .then(function(result) {
        }, function(error) {
          console.log('error');
        })
    }

    $scope.navigateTo = function(state) {
      $state.go(state);
    };
  }
})();
