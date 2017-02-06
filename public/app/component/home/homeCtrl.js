angular.module('app').controller('homeCtrl', function($scope, homeSvc, userSvc) {

  var loggedIn = function(){
    userSvc.loggedIn().then(function(res){
      userSvc.currentUser = res.data;
    });
  };
  loggedIn();

  $scope.getAllProducts = function() {
    homeSvc.getAllProducts()
      .then(function(response) {
          // console.log(response);
          $scope.products = response;
      });
  };
  $scope.getAllProducts();




  $scope.addToCart = (product) => {
    console.log(product);
    homeSvc.addToCart(product).then((res) => {
      console.log(response + "addToCart resp");
      // $scope.products = response;
    });
  };
});
