(function(module) {
  "use strict";

  dashboardNav.$inject = ['$state', 'authService', '$rootScope', '$location']


  function dashboardNav($state, authService, $rootScope, $location) {

    var directive = {
      restrict: "E",
      templateUrl: 'common/views/dashboard-nav.html',
      controller: dashboardNavController,
      controllerAs: 'navbarVm',
      scope: true

    };
    return directive;

    function dashboardNavController($state, authService) {
        console.log('nav directive linked up')

         var vm = this;
         vm.user = {}

      if ( authService.isLoggedIn() ) {
        vm.user = authService.getCurrentUser()
      }

        console.log(vm.user)  

    

        vm.currentUser = 'Abe m'

        vm.navItemLeft = [
            { label: 'back to website', state: 'app.landing' },
            { label: 'second tab', state: 'app.home' }
            
          ];

        vm.navItemRight = [
            { class: 'fa fa-fw fa-bar-chart-o', state: 'dashboard.view1', name: 'Dashboard' },
            { class: 'fa fa-fw fa-table', state: 'dashboard.view2', name: 'Charts' }
            
        ];
       


          

    }
        
    };
  
  module.directive('dashboardNav', dashboardNav);

})(angular.module('YogaApp.Directives'));
