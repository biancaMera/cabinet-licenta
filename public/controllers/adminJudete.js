(function () {
  'use strict';

  angular
  .module('cabinet')
  .controller('AdminJudete', AdminJudete);

  AdminJudete.$inject = ['Util','$state', '$scope', '$location', '$anchorScroll'];

  function AdminJudete(Util, $state, $scope, $location, $anchorScroll) {
    
    // $scope.specializations = [];
    var judetId;
    $scope.isEditPage = false;

    $scope.judet = {};
    if($state.params.id) {
      judetId = $state.params.id
      initializeJudet();
      $scope.isEditPage = true;
    }


    function initializeJudet() {
      var url = '/api/judet/'+judetId;
      Util.get(url)
        .then(function (result) {
          $scope.judet = result.data;
        }, function(error) {
          console.log('error',error);
        });
    }

    $scope.addJudet = function() {
      var url = '/api/judet/';
      Util.create(url, $scope.judet)
        .then(function(result) {
          $scope.judet = {};
        }, function(error) {
          console('error');
        })
    }

    $scope.editJudet = function(id) {
      var url = '/api/judet/' + id
      Util.update(url, $scope.judet)
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
