(function(module) {
  "use strict";

  yogaSpinner.$inject = ['spinnerService'];

  function yogaSpinner(spinnerService) {
    


    return {
        restrict: "AE",
        templateUrl: 'common/views/yoga-spinner.html',
        link: function(scope, element, attributes) {

            var shownType = element.css('display');

            function hideElement() {
                element.css('display', 'none');
            }

            scope.$on('hide spinner',hideElement);

            scope.$on('show spinner', function() {
                element.css('display', shownType);

        });

        hideElement();
        
        }
    }

  };


  module.directive('yogaSpinner', yogaSpinner);

})(angular.module('YogaApp.Directives'));
