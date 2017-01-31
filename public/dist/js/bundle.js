'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './app/component/home/home.html',
        controller: 'homeCtrl'
    }).state('about', {
        url: '/about',
        templateUrl: './app/component/about/about.html',
        controller: 'abtCtrl'
    }).state('admin', {
        url: '/admin',
        templateUrl: './app/component/admin/admin.html'
    }).state('cart', {
        url: '/cart',
        templateUrl: './app/component/admin/admin.html'
    }).state('account', {
        url: '/account',
        templateUrl: './app/component/myAccount/account.html',
        controller: 'accountCtrl'
    }).state('shop', {
        url: '/#/shop',
        tamplateUrl: './app/component/shop/shop.html'
    });
});
'use strict';

angular.module('app').service('userSvc', function ($http) {

  this.loggedIn = function () {
    return $http({
      method: 'GET',
      url: '/loggedIn'
    });
  };

  this.currentUser;
});
'use strict';

angular.module('app').controller('abtCtrl', function ($scope) {});
'use strict';

angular.module('app').controller('homeCtrl', function ($scope, homeSvc, userSvc) {

  var loggedIn = function loggedIn() {
    userSvc.loggedIn().then(function (res) {
      userSvc.currentUser = res.data;
    });
  };
  loggedIn();

  $scope.getAllProducts = function () {
    homeSvc.getAllProducts().then(function (response) {
      // console.log(response);
      $scope.products = response;
    });
  };
  $scope.getAllProducts();

  $scope.addToCart = function (product) {
    console.log(product);
    homeSvc.addToCart(product).then(function (res) {
      console.log(response + "addToCart resp");
      // $scope.products = response;
    });
  };
});
'use strict';

angular.module('app').service('homeSvc', function ($http) {

  this.getAllProducts = function () {
    return $http({
      method: 'GET',
      url: '/products'
    }).then(function (response) {
      return response.data;
    });
  };

  this.addToCart = function (product) {
    return $http({
      method: 'POST',
      url: '/addToCart',
      data: product
      // ^since its already an object, can just say 'product'
    }).then(function (response) {
      console.log(response.data);
    });
  };
});
'use strict';

angular.module('app').controller('accountCtrl', function ($state, $scope, accountSvc, userSvc) {

  if (!userSvc.currentUser) {
    $state.go('home');
  }

  $scope.getCartProducts = function () {
    accountSvc.getCartProducts().then(function (response) {
      console.log(response);
      $scope.products = response;
    });
  };
  // $scope.getCartProducts();

});
'use strict';

angular.module('app').service('accountSvc', function ($http) {

  this.getCartProducts = function () {
    return $http({
      method: 'GET',
      url: '/getCart'
    }).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };
});
'use strict';

angular.module('app').controller('shopCtrl', function ($scope) {});
// angular.module('app')
"use strict";
//# sourceMappingURL=bundle.js.map
