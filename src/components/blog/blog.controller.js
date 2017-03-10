(function (module) {

  "use strict";

  var BlogCtrl;
  BlogCtrl.$inject = ['blogService'];

  function BlogCtrl(blogService) {

    var vm = this
    console.log('i am working')


     vm.createBlog = function(data) {
      
      blogService.createBlog(data)
      .then(function(res){
        console.log('blog created', res)
    
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