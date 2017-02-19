(function(module) {
  "use strict";

  yogaNav.$inject = ['$state']


  function yogaNav($state) {

    var directive = {
      restrict: "E",
      templateUrl: 'common/views/nav.html',
      controller: YogaController,
      controllerAs: 'navbarVm'

    };
    return directive;


    /** @ngInject */
    function YogaController($state) {
      var vm = this;

      vm.stateArray = [];

      var currentState = $state.current.name;
      var currentUser = true
      vm.isCollapsed = true;
      console.log("GETTING IN HERE")
      
      if (currentUser) {
        vm.menuItemLeft = [
          { label: 'Home', state: 'home' },
          { label: 'Search', state: 'home' },
          { label: 'About', state: 'about' },
          { label: 'Classes', state: 'classes' },
        ];
        // vm.menuItemRight = [
        //   { label: 'Register', state: 'register' },
        //   { label: 'Login', state: 'login' }
        // ];
        vm.loggedin = false;
      } else {
        vm.menuItemLeft = [
          { label: 'Home', state: 'home' },
          { label: 'Search', state: 'home1' },
          { label: 'About', state: 'about' },
          { label: 'Classes', state: 'classes' },
        ];
        // vm.menuItemRight = [
        //   { label: 'Register', state: 'register' },
        //   { label: 'Login', state: 'login' }
        // ];
        vm.loggedin = false;
      }

    //   vm.logOut = function() {
    //     authService.logOut()
    //     $state.go('candidate.login');
    //   }

    };
  };
  module.directive('yogaNav', yogaNav);

})(angular.module('YogaApp.Directives'));
