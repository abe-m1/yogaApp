(function(module){
    'use strict'

    var dashboardService;
    dashboardService.$inject = ['urlFactory', '$log', '$http'];

    function dashboardService(urlFactory, $log, $http) {

        var exports = {
          getImages: getImages,
          updateImage: updateImage
        }

        function getImages() {
                return $http( {
                method: 'GET',
                url   : urlFactory + '/page'
            } )
	    }

        function updateImage( page, pos, imgUrl ) {
            return $http( {
                method: 'PATCH',
                url   : urlFactory + '/page',
                data  : {
                    num : page,
                    pos : pos,
                    img : imgUrl
                }
            } )
	}


     



        


        return exports
    }

    module.factory("dashboardService", dashboardService)
})(angular.module('YogaApp.Services'))