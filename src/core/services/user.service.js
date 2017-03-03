(function(module){
    'use strict'

    var userService;
    userService.$inject = [ 'urlFactory', '$log', '$http'];

    function userService(urlFactory, $log, $http) {

        var exports = {
          
        }


        return exports
    }

    module.factory("userService", userService)
})(angular.module('YogaApp.Services'))