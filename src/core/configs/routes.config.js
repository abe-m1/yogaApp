      (function () {
        'use strict';

        angular
          .module('YogaApp.Configs')
          .config(routesProvider);

        function routesProvider($stateProvider, $urlRouterProvider) {
          $stateProvider

          // Employer States
          .state('home', {
            url: '/',
            templateUrl: 'components/home/home.html',
            // controller: 'HomeCtrl',
            // controllerAs: 'home'
          })

          .state('about', {
            url: '/',
            templateUrl: 'components/home/about.html',
            
          })

          

          $urlRouterProvider.otherwise('/');
        }


      })();
