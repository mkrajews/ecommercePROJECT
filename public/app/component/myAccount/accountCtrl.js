angular.module('app').controller('accountCtrl', function($scope, accountSvc) {

  $scope.getCartProducts = function() {
    accountSvc.getCartProducts()
      .then(function(response) {
        console.log(response);
        $scope.products = response;
      });
  };
  $scope.getCartProducts();



});
