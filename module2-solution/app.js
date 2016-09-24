(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];

function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuyShopping = this;
	
	toBuyShopping.toBuyList = ShoppingListCheckOffService.toBuyList;
	
	toBuyShopping.buyItem = ShoppingListCheckOffService.buyItem;
	toBuyShopping.everythingBought = ShoppingListCheckOffService.everythingBought;
};

function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBoughtShopping = this;
	
	alreadyBoughtShopping.alreadyBoughtList = ShoppingListCheckOffService.alreadyBoughtList;
	
	alreadyBoughtShopping.alreadyBought = ShoppingListCheckOffService.alreadyBought;
	alreadyBoughtShopping.nothingBought = ShoppingListCheckOffService.nothingBought;
};

function ShoppingListCheckOffService() {
    var service = this;

	service.toBuyList=[{ name: "cookies", quantity: 10 },
				       { name: "butter",  quantity: 5  },
	                   { name: "apples",  quantity: 10 },
	                   { name: "oranges", quantity: 7 },
	                   { name: "salt",    quantity: 1 }];
				   
	service.alreadyBoughtList=[];
	
	service.buyItem = function(index) {
	   console.log(index + ":" + service.toBuyList[index]);
	   
	   var boughtItem = {
	      name: service.toBuyList[index].name,   
		  quantity: service.toBuyList[index].quantity
	   }
	   service.alreadyBoughtList.push(boughtItem);
	   service.toBuyList.splice(index,1);	   
	};
	
	service.getBuyList = function () {
       return service.toBuyList;
    };
	
	service.everythingBought = function() {
	   return service.toBuyList.length==0;
	};
	
	service.nothingBought = function() {
	   return service.alreadyBoughtList.length==0;
	};
};

})();
