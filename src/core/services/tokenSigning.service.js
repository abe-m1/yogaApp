(function(module) {
  var tokenSigningService;
  tokenSigningService.$inject = ['tokenService', '$log']

  function tokenSigningService(tokenService, $log) {

      function request(config){
          if (tokenService.retrieve('yoga_token')){
              config.headers['token'] = tokenService.retrieve('yoga_token')
          }

          return config
      }

      return {
          request: request
      }

      
  }
  module.factory('tokenSigningService', tokenSigningService);
}(angular.module("YogaApp.Services")));