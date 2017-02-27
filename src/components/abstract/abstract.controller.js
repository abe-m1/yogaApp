(function (module) {

  "use strict";

  var AbstractCtrl;
  AbstractCtrl.$inject = [];

  function AbstractCtrl() {

    var vm = this
    console.log('i am working')
   

  }
  module.controller('AbstractCtrl', AbstractCtrl);

})(angular.module('YogaApp.Controllers'));
