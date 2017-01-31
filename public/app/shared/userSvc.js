angular.module('app').service('userSvc', function($http){

  this.loggedIn = function(){
    return $http({
      method: 'GET',
      url: '/loggedIn'
    })
  }

  this.currentUser;
})
