      (function () {
        'use strict';

        angular
          .module('YogaApp.Configs')
          .config(routesProvider);

        function routesProvider($stateProvider, $urlRouterProvider) {
          $stateProvider

          
          // .state('app', {
          //   url: '^',
          //   abstract: true,
            
          //   controller: 'AbstractCtrl',
          //   controllerAs: 'abstract'
          // })

          .state('home', {
            url: '/',
            templateUrl: 'components/home/home.html',
            // controller: 'HomeCtrl',
            // controllerAs: 'home'
            controller: 'AbstractCtrl',
            controllerAs: 'abstract'
          })

          .state('about', {
            url: '/about',
            templateUrl: 'components/about/about.html',
            
          })

          .state('classes', {
            url: '/classes',
            templateUrl: 'components/classes/classes.html',
            
          })

          .state('contact', {
            url: '/contact',
            templateUrl: 'components/contact/contact.html',
            
          })

          

          $urlRouterProvider.otherwise('/');
        }


      })();
