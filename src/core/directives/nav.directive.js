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
          { label: 'Home', state: 'app.home' },
          { label: 'Our Approach', state: 'app.approach' },
          { label: 'Instructors', state: 'app.instructors' },
          { label: 'About', state: 'app.about' },
          { label: 'Contact', state: 'app.contact' },
          { label: 'Classes', state: 'app.classes' },
        ];
        // vm.menuItemRight = [
        //   { label: 'Register', state: 'register' },
        //   { label: 'Login', state: 'login' }
        // ];
        vm.loggedin = false;
      } else {
        vm.menuItemLeft = [
          { label: 'Home', state: 'home' },
          { label: 'Contact', state: 'contact' },
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
