(function(module){
    'use strict'

    var blogService;
    blogService.$inject = ['urlFactory', '$log', '$http'];

    function blogService(urlFactory, $log, $http) {

        var exports = {
            createBlog: createBlog,
            getBlog: getBlog
        
        }

         function createBlog(data){
            return $http({
                method: 'POST',
                url: urlFactory + '/blog',
                data: data
            })
        }

        function getBlog(){
            return $http({
                method: 'GET',
                url: urlFactory + '/blog'
            })
        }

         

        return exports
    }

    module.factory("blogService", blogService)
})(angular.module('YogaApp.Services'))