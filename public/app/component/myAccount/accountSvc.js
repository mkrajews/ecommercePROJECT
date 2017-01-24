angular.module('app').service('accountSvc', function($http) {

  this.getCartProducts = function() {
    return $http({
      method: 'GET',
      url: '/getCart'
    }).then(function(response) {
      console.log(response.data);
      return response.data;
    });
  };



});
