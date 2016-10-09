(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

ItemDetailController.$inject = ['$stateParams', 'MenuDataService','categories'];
function ItemDetailController($stateParams, MenuDataService, categories) {
  var itemDetail = this;

  var category = categories[$stateParams.itemId];
  var promise = MenuDataService.getItemsForCategory(category.short_name);
  promise.then(function(result) {
     
     itemDetail.menuItems = result.data.menu_items;
  })
  .catch(function (error) {
      console.log("getItemsForCategory - Something went terribly wrong.");
  });

};

})();
