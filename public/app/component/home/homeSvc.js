angular.module('app').service('homeSvc', function($http) {

  this.getAllProducts = function() {
    return $http({
      method: 'GET',
      url: '/products'
    }).then(function(response) {
      return response.data;
    });
  };



  this.addToCart = function(product) {
    return $http({
      method: 'POST',
      url: '/addToCart',
      data: product
      // ^since its already an object, can just say 'product'
    }).then(function(response) {
      console.log(response.data);
    });
  };

});
