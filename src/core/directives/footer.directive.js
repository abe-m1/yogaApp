(function (module) {
  "use strict";

  function yogaFooter() {
    return {
      restrict: "E",
      templateUrl: "common/views/footer.html",
      scope: true
    };
  }

  module.directive('yogaFooter', yogaFooter);

})(angular.module('YogaApp.Directives'));
