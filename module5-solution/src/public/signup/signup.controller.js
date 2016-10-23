(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'SignUpService'];
function SignUpController(MenuService, SignUpService) {
  var $ctrl = this;
  $ctrl.person = {};
  $ctrl.infoSaved = false;

  $ctrl.isMenuNumberValid = true;

  $ctrl.submit = function() {
     MenuService.getMenuItem($ctrl.person.menu_number).then(function(data){
        $ctrl.isMenuNumberValid = (data !== null);
        if ($ctrl.isMenuNumberValid) {
          SignUpService.saveSignUpDetails($ctrl.person, data);
          $ctrl.infoSaved = true;
        } else {
          $ctrl.infoSaved = false;
        }
     });
     console.log("submitted");
  };

}

})();
