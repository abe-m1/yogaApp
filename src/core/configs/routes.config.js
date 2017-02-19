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
            templateUrl: 'components/about/about.html',
            
          })

          .state('classes', {
            url: '/',
            templateUrl: 'components/classes/classes.html',
            
          })

          

          $urlRouterProvider.otherwise('/');
        }


      })();
