(function(module){
    'use strict'

    var userService;
    userService.$inject = [ 'urlFactory', '$log', '$http'];

    function userService(urlFactory, $log, $http) {

        var exports = {
          signup: signup,
          getUser: getUser
        }

         function signup(data){
            return $http({
                method: 'POST',
                url: urlFactory + '/user/register',
                data: data
            })
        }

        function getUser(){
            return $http({
                method: 'GET',
                url: urlFactory + '/user/current'
            })
        }



        return exports
    }

    module.factory("userService", userService)
})(angular.module('YogaApp.Services'))