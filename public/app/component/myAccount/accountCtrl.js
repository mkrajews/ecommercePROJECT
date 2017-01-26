angular.module('app').controller('accountCtrl', function($state, $scope, accountSvc, userSvc) {

if(!userSvc.currentUser){
  $state.go('home')
}

  $scope.getCartProducts = function() {
    accountSvc.getCartProducts()
      .then(function(response) {
        console.log(response);
        $scope.products = response;
      });
  };
  // $scope.getCartProducts();


});
