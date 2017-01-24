angular.module('app').controller('homeCtrl', function($scope, homeSvc) {

  $scope.getAllProducts = function() {
    homeSvc.getAllProducts()
      .then(function(response) {
          // console.log(response);
          $scope.products = response;
      });
  };
  // $scope.getAllProducts();




  $scope.addToCart = (product) => {
    console.log(product);
    homeSvc.addToCart(product).then((res) => {
      console.log(response + "addToCart resp");
      // $scope.products = response;
    });
  };
});
