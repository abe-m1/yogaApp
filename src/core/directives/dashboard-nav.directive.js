(function(module) {
  "use strict";

  dashboardNav.$inject = []


  function dashboardNav() {

    var directive = {
      restrict: "E",
      templateUrl: 'common/views/dashboard-nav.html',
      controller: dashboardNavController,
      controllerAs: 'navbarVm',
      scope: true

    };
    return directive;

    function dashboardNavController() {
    }
        
    };
  
  module.directive('dashboardNav', dashboardNav);

})(angular.module('YogaApp.Directives'));
