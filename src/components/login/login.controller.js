(function(module) {

  "use strict";
  var LoginCtrl;
  LoginCtrl.$inject = ['authService', 'tokenService', 'TOKEN_HASH' , 'CURRENT_USER', '$state', 'localStorageManager'];



  function LoginCtrl(authService, tokenService, TOKEN_HASH, CURRENT_USER, $state, localStorageManager) {
    
   console.log('login running')

   
  

  }


  module.controller('LoginCtrl', LoginCtrl);

})(angular.module('YogaApp.Controllers'));