(function(module){
    'use strict'

    var dashboardService;
    dashboardService.$inject = ['urlFactory', '$log', '$http'];

    function dashboardService(urlFactory, $log, $http) {

        var exports = {
          getImages: getImages
        }

        function getImages() {
		    return $http( {
			method: 'GET',
			url   : urlFactory + '/page'
		} )
	}


     



        


        return exports
    }

    module.factory("dashboardService", dashboardService)
})(angular.module('YogaApp.Services'))