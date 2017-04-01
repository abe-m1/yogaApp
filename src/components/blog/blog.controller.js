(function (module) {

  "use strict";

  var BlogCtrl;
  BlogCtrl.$inject = ['blogService'];

  function BlogCtrl(blogService) {

    var vm = this
    console.log('i am working')

    vm.test = function(){
        console.log('blog clicked')
    }

     vm.createBlog = function(data) {
      console.log('create blog clicked')
      blogService.createBlog(data)
      .then(function(res){
        console.log('blog created', res)
        vm.data = ''
    
      })
    }

    vm.getBlog = function(){
        blogService.getBlog()
      .then(function(res){
        console.log('all blogs', res)
    
      })
    } 


   

  }
  module.controller('BlogCtrl', BlogCtrl);

})(angular.module('YogaApp.Controllers'));