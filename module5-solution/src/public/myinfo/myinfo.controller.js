(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService', 'ApiPath'];
function MyInfoController(SignUpService, ApiPath) {

  var $ctrl = this;

  $ctrl.person = SignUpService.person;
  $ctrl.menu_item = SignUpService.menu_item;
  $ctrl.basePath = ApiPath;

  $ctrl.isRegistered  = function() {
    return SignUpService.person !== null;
  };

};


})();
