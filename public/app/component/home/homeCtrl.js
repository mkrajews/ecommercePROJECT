angular.module('app').controller('homeCtrl', function($scope, homeSvc) {

  $scope.getAllProducts = function() {
    homeSvc.getAllProducts()
      .then(function(response) {
          // console.log(response);
          $scope.products = response;
      });
  }
  // $scope.getAllProducts();
});
