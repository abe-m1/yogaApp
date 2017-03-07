(function(module) {
  "use strict";

  dashboardNav.$inject = []


  function dashboardNav() {

    var directive = {
      restrict: "E",
      templateUrl: 'common/views/dashboard-nav.html',
      scope: true

    };
    return directive;
        
    };
  
  module.directive('dashboardNav', dashboardNav);

})(angular.module('YogaApp.Directives'));
