(function(module) {

  "use strict";
  var DashboardCtrl;
  DashboardCtrl.$inject = [];



  function DashboardCtrl() {
    
   

    var vm = this;
    console.log('i am hooked up crm')
    vm.hello = 'hello'
  

  }


  module.controller('DashboardCtrl', DashboardCtrl);

})(angular.module('YogaApp.Controllers'));

