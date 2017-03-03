(function (module) {
  var jsonApplicationTypeService;
  jsonApplicationTypeService.$inject = []
  function jsonApplicationTypeService () {

    var exports = {
      request:request
    }

    var request = function(config){
        config.headers['Content-Type'] = "application/json";
        return config
    }

    return exports
  }
   module.factory('jsonApplicationTypeService', jsonApplicationTypeService);
}(angular.module("YogaApp.Services")));