(function (module) {

  "use strict";

  var BlogCtrl;
  BlogCtrl.$inject = [];

  function BlogCtrl() {

    var vm = this
    console.log('i am working')


   

  }
  module.controller('BlogCtrl', BlogCtrl);

})(angular.module('YogaApp.Controllers'));