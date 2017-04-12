(function (module) {

  "use strict";

  var AbstractCtrl;
  AbstractCtrl.$inject = [];

  function AbstractCtrl() {

    var vm = this
    console.log('i am working')

      vm.bulletPoint = {
       1: {
         'text' : 'this will describe idea 1',
         'link' : 'http://lorempixel.com/400/200/nature/',
       },
       2: {
         'text' : 'this will describe idea 2' ,
         'link' : 'http://lorempixel.com/400/200/nature/',
       },
       3: {
         'text' : 'this will describe idea 3',
         'link' : 'http://lorempixel.com/400/200/nature/',
       }
     };
   

  }
  module.controller('AbstractCtrl', AbstractCtrl);

})(angular.module('YogaApp.Controllers'));
