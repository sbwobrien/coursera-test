(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService .$inject = ['$http','ApiBasePath']
function MenuDataService ($http,ApiBasePath) {

   var ctrl = this;

   ctrl.getAllCategories = function() {
      		return $http({
                 method: "GET",
                 url: (ApiBasePath + "/categories.json")
               })
               .then(function(result) {
                       return result.data;
                   })
               .catch(function (error) {
                       console.log("getAllCategories - Something went terribly wrong.");
               });
   };

   ctrl.getItemsForCategory = function(categoryShortName) {
   		return $http({
                 method: "GET",
                 url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
               });
   };

}

})();
