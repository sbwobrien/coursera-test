(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.dishes = "";
    $scope.checkIfTooMuch = function () {

        if ($scope.dishes != null && $scope.dishes.length == 0) {
           $scope.message = "Please enter data first";
        } else {
            var dishesAsArray = $scope.dishes.split(",");
            $scope.message = (dishesAsArray.length <= 3) ? "Enjoy!" : "Too much!";
        }
    };
};

})();
