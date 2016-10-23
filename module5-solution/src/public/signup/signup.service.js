(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;

  service.person = null;

  service.saveSignUpDetails = function(_person_, _menu_item_) {
     service.person = _person_;
     service.menu_item = _menu_item_;
  }
}

})();
