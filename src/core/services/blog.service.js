(function(module){
    'use strict'

    var blogService;
    blogService.$inject = ['urlFactory', '$log', '$http'];

    function blogService(urlFactory, $log, $http) {

        var exports = {
            createBlog: createBlog,
        
        }

         function createBlog(data){
            return $http({
                method: 'POST',
                url: urlFactory + '/blog',
                data: data
            })
        }

         

        return exports
    }

    module.factory("blogService", blogService)
})(angular.module('YogaApp.Services'))