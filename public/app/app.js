angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: './app/component/home/home.html',
                controller: 'homeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: './app/component/about/about.html',
                controller: 'abtCtrl'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: './app/component/admin/admin.html'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: './app/component/cart/cart.html'
            })
            .state('account', {
                url: '/account',
                templateUrl: './app/component/myAccount/account.html',
                controller: 'accountCtrl'
            })
            .state('login', {
                url: '/login',
                tamplateUrl: './app/component/login/login.html'
            });

    });
