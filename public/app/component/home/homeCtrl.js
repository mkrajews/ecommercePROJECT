angular.module('app').controller('homeCtrl', function($scope, homeSvc) {

  $scope.getAllProducts = function() {
    homeSvc.getAllProducts()
      .then(function(response) {
          // console.log(response);
          $scope.products = response;
      });
  };
  // $scope.getAllProducts();




  $scope.addProductToCart = () => {
    homeSvc.addToCart().then((res) => {
      console.log(response + "addToCart resp" + res.data);
      // $scope.products = response;
    });
  };
});
