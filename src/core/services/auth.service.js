(function(module){
    'use strict'
    var authService;

    authService.$inject = ['tokenService', 'TOKEN_HASH', 'CURRENT_USER', 'urlFactory', '$log', '$http'];

    function authService(tokenService, TOKEN_HASH, CURRENT_USER, urlFactory, $log, $http) {
        var exports = {
           
        }

       

       
        return exports;
    }
    module.factory('authService', authService)
})(angular.module('YogaApp.Services'))