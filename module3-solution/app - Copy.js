(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController )
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
/*
.component('foundItems', {
  templateUrl: 'foundItems.html',
  controller: ShoppingListComponentController,
  bindings: {
    found-items: '<'
  }); */

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;
  
  ctrl.searchItem = "";
  
  ctrl.getMatchedMenuItems = function() {
      MenuSearchService.getMatchedMenuItems(ctrl.searchItem);
  };
  
  ctrl.found = MenuSearchService.getFoundItems();
  
  /*function() {
    
	 console.log("found called");
     return [{description:MenuSearchService.foundItems.length}, {description:"hi there2"}];
  
  } */
  
  /* ctrl.found = function() {
     console.log("complete" + MenuSearchService.foundItems.length);
     return MenuSearchService.foundItems;
  }*/
  
};

MenuSearchService.$inject = ['$http','ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {

   var service = this;
   
   service.foundItems = [];
   
   service.getFoundItems = function() {
   //return [{description:service.foundItems.length}, {description:"hi there2"}];
     return service.foundItems;
   }
   
   service.getMatchedMenuItems = function(searchTerm) {

		return $http({
                 method: "GET",
                 url: (ApiBasePath + "/menu_items.json")
               }).then(function (result) {
			   
			         // process result and only keep items that match
			         service.foundItems =  result.data.menu_items.filter(function (value) {  
					    return (value.description).indexOf(searchTerm) !== -1;
					 });			
                     console.log("complete" + service.foundItems.length);					 
		       });
   };
};

})();



