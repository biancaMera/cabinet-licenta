(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('AdminSpecializari', AdminSpecializari);

  AdminSpecializari.$inject = ['Util','$state', '$scope', '$location', '$anchorScroll'];

  function AdminSpecializari(Util, $state, $scope, $location, $anchorScroll) {
    
    // $scope.specializations = [];
    var specializationId;
    $scope.isEditPage = false;

    $scope.specialization = {};
    if($state.params.id) {
      specializationId = $state.params.id
      initializeSpecialization();
      $scope.isEditPage = true;
    }


    function initializeSpecialization() {
      var url = '/api/specialization/'+specializationId;
      Util.get(url)
        .then(function (result) {
          $scope.specialization = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }

    $scope.addSpecialization = function() {
      var url = '/api/specialization/';
      Util.create(url, $scope.specialization)
        .then(function(result) {
          $scope.specialization = {};
        }, function(error) {
          console('error');
        })
    }

    $scope.editSpecialization = function(id) {
      var url = '/api/specialization/' + id
      Util.update(url, $scope.specialization)
        .then(function(result) {
        }, function(error) {
          console.log('error');
        })
    }


    // $scope.gotoAnchor = function(id) {
    //   $location.hash(id);
    //   $anchorScroll();
    // }
    $scope.navigateTo = function(state) {
      $state.go(state);
    };

    // $scope.findMedic = function() {
    //   $state.go('medici');
    // }
  }
})();
