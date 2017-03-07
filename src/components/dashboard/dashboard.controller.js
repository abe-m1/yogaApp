(function(module) {

  "use strict";
  var DashboardCtrl;
  DashboardCtrl.$inject = ['dashboardService'];



  function DashboardCtrl(dashboardService) {
    
   

    var vm = this;
    console.log('i am hooked up crm')
    vm.hello = 'hello'


    var vm  = this
	var url = "/api"

	vm.pages       = []
	vm.pagePics    = []
	vm.allPics     = []
    vm.pageName
	vm.selectedPic = null
	vm.currentPage = 0
    $scope.choose



	vm.selectIdx = -1;
   
    vm.selectImage = function ( $index ) {
      console.log($index)
      if(vm.selectIdx === $index) {
         vm.selectIdx = -1;
      } else {
          vm.selectIdx = $index;
          console.log(vm.selectIdx)
      }
    }

	function getPages() {
		dashboardService.getImages()
	}

	function updatePage( page, pos, imgUrl ) {
		return $http( {
			method: 'PATCH',
			url   : url + '/page',
			data  : {
				num : page,
				pos : pos,
				img : imgUrl
			}
		} )
	}

	function getAllPics() {
		return $http( {
			method: 'POST',
			url   : url + '/blog'
		} )
	}

	function log( data ) {
		// console.log( 'Back', data )
		return data
	}

	function setLog( data ) {
		// console.log( 'Back', data )
		return data.data
	}

	function err( err ) {
		console.log( 'Error', err )
	}

	vm.selectPic = function( pic, index, key ) {
		// $scope.$apply( function() {
			// console.log('Selected pic', vm.pages[ vm.currentPage ].positions )
			vm.selectedPic = vm.pages[ vm.currentPage ].positions[ key ]
			vm.selectedKey = key
	}

	vm.updatePage = function( pic ) {
		var page = vm.pages[ vm.currentPage ].page
		var key = vm.selectedKey
		var url = pic.original_size.url
		console.log('UPDATING', page, key, url )
		updatePage( page, key, url )
			.then( function( data ) {
				console.log( 'UPDATED', data )
				loadPages()
				vm.selectedPic = null
				vm.selectedKey = null
			} )
			.catch( err )
	}


	// Get a list of all the pages that can be changed
	function loadPages() {
		getPages()
			.then( setLog )
			.then( function( data ) {
				vm.pages     = data
				vm.changePage( null, vm.currentPage )
			} )
			.catch( err )
	}

	function loadPics() {
        vm.pageName = "Home"
		getAllPics()
			.then( setLog )
			.then( function( data ) {
				for ( var i in data.posts ) {
					var photos = data.posts[ i ].photos
					for ( var j in photos ) {
						vm.allPics.push( photos[ j ] )
					}
				}
			} )
			.catch( err )
	}

	vm.changePage = function( pageNum, index, pageName ) {
		vm.currentPage = index
		vm.pagePics    = vm.pages[ vm.currentPage ].positions
		test           = vm.pagePics
        vm.pageName    = pageName
	}

	vm.selectPic = function( pic, index, key ) {
			vm.selectedPic = vm.pages[ vm.currentPage ].positions[ key ]
			vm.selectedKey = key
	}

	vm.updatePage = function( pic ) {
		var page = vm.pages[ vm.currentPage ].page
		var key = vm.selectedKey
		var url = pic.original_size.url
		updatePage( page, key, url )
			.then( function( data ) {
				loadPages()
				vm.selectedPic = null
				vm.selectedKey = null
				vm.selectIdx = -1;
			} )
			.catch( err )
	}
	// checkAdmin()
	loadPages()
	loadPics()
  

  }


  module.controller('DashboardCtrl', DashboardCtrl);

})(angular.module('YogaApp.Controllers'));

