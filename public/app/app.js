angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                // templateUrl: 'index.html',
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
            .state('myAccount', {
                url: '/myAccount',
                templateUrl: './app/component/myAccount/myAccount.html',
                controller: 'accountCtrl'
            });

    });
