(function(module){
    'use strict'

    var userService;
    userService.$inject = [ 'urlFactory', '$log', '$http'];

    function userService(urlFactory, $log, $http) {

        var exports = {
          signup: signup,
        }

         function signup(data){
            return $http({
                method: 'POST',
                url: urlFactory + '/user/register',
                data: data
            })
        }


        return exports
    }

    module.factory("userService", userService)
})(angular.module('YogaApp.Services'))