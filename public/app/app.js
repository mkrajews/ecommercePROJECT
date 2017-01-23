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
          // template: '<h2>ABOUT page</h2>',
            url: '/about',
            templateUrl: './app/component/about/about.html',
            controller: 'abtCtrl'
        })

        // .state('myAccount', {
        //     url: '/myAccount',
        //     templateUrl: './app/component/myAccount.html',
        //     // controller: 'storedArtCtrl'
        // });

    });
