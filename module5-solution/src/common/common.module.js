(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://rocky-fjord-57717.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
