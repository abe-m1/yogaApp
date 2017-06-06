      (function () {
        'use strict';

        angular
          .module('YogaApp.Configs')
          .config(routesProvider);

        function routesProvider($stateProvider, $urlRouterProvider) {
          $stateProvider

          
          .state('app', {
            url: '^',
            abstract: true,
            templateUrl: 'components/abstract/abstract.html',
            controller: 'AbstractCtrl',
            controllerAs: 'abstract'
          })

          .state('app.home', {
            url: '/',
            templateUrl: 'components/home/home.html',
            // controller: 'HomeCtrl',
            // controllerAs: 'home'
          })

          .state('app.about', {
            url: '/about',
            templateUrl: 'components/about/about.html',
            controller: 'AbstractCtrl',
            controllerAs: 'abstract'
            
          })

          .state('app.instructors', {
            url: '/instructors',
            templateUrl: 'components/instructors/instructors.html',
            
            
          })

          .state('app.approach', {
            url: '/approach',
            templateUrl: 'components/approach/approach.html',
            controller: 'AbstractCtrl',
            controllerAs: 'abstract'
            
          })

          .state('app.classes', {
            url: '/classes',
            templateUrl: 'components/classes/classes.html',
            
          })

          .state('app.contact', {
            url: '/contact',
            templateUrl: 'components/contact/contact.html',
            
          })

          .state('login', {
            url: '/login',
            templateUrl: 'components/login/login.html',
            controller: 'LoginCtrl',
            controllerAs: 'login'
            
          })

           .state('dashboard', {
             url: '/dashboard',
             templateUrl: 'components/dashboard/dashboard.html',
             controller: 'DashboardCtrl',
             controllerAs: 'dashboard'
            
           })

           .state('dashboard.view1', {
             url: '/view1',
             templateUrl: 'components/dashboard/view1.html',
             controller: 'BlogCtrl',
             controllerAs: 'blog'
            
            
           })

           .state('dashboard.view2', {
             url: '/view2',
             templateUrl: 'components/dashboard/view2.html'
            
            
           })

           

        //   .state('dashboard', {
        //     url: '/dashboard',
        //     controller: 'DashboardCtrl',
        //     controllerAs: 'dashboard',
        //     views: {
        //      "": { templateUrl: 'components/dashboard/dashboard.html'},

        //     // the child views will be defined here (absolutely named)
        //     'view1@dashboard': { 
        //         templateUrl: 'components/dashboard/view1.html' },
        //     'view2@dashboard': 
        //       { templateUrl: 'components/dashboard/view2.html' }             
        //     }
        // })


          

          

          $urlRouterProvider.otherwise('/');
        }


      })();
