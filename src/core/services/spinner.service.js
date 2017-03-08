(function(module) {
  var spinnerService;
  spinnerService.$inject = ['$rootScope'];

  function loaderService($rootScope) {
    


    var exports = {
      showSpinner: showSpinner,
      hideSpinner: hideSpinner
    }

    function hideSpinner() {
      $rootScope.$broadcast('hide spinner');
    }

    function showSpinner() {
     $rootScope.$broadcast('show spinner');
    }


 return exports;
  };
  module.factory('spinnerService', spinnerService);
}(angular.module("YogaApp.Services")));