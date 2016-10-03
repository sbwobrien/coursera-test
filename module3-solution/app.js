(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.component('foundItems', {
    templateUrl: 'foundItems.html',
    bindings: {
      myTitle: '@title',
	  items: '<',
	  onRemove: '&'
    },
	controller: NarrowItDownController,
	controllerAs: 'list',
    bindToController: true
});

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  
  ctrl.searchItem = "";
  ctrl.found = [];
  ctrl.message = "";
  
  ctrl.title ="Results";
  
  ctrl.getMatchedMenuItems = function() {
      if (ctrl.searchItem === "" ) {
	     ctrl.message = ctrl.nonFound() ? "Nothing found" : "";
	     return;
	  }
	  
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchItem);
	  
	  promise.then(function (result) {
			   
			         // process result and only keep items that match
			         ctrl.found =  result.data.menu_items.filter(function (value) {  
					    return (value.description).indexOf(ctrl.searchItem) !== -1;
					 });			
                	 ctrl.message = ctrl.nonFound() ? "Nothing found" : "";
		       })
			   .catch(function (error) {
                     console.log("Something went terribly wrong.");
               });
    };
	
	ctrl.removeItem = function(itemIndex) {
	   ctrl.found.splice(itemIndex,1);
	};
	
	ctrl.nonFound = function() {
	  return ctrl.found.length === 0;
	};

};

MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {

   var service = this;
  
   service.getMatchedMenuItems = function(searchTerm) {
		return $http({
                 method: "GET",
                 url: (ApiBasePath + "/menu_items.json")
               });
   };
};

})();



