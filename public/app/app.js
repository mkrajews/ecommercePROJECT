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
            });

        // .state('myAccount', {
        //     url: '/myAccount',
        //     templateUrl: './app/component/myAccount.html',
        //     // controller: 'storedArtCtrl'
        // });

    });
