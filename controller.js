'use strict;'
//The controller is used to accept input from shoppingList.html
//and convert it to output for model.js to update the view.js
function onClick() {
  let button = document.querySelector('#buttonAdd');
  let itemName = document.querySelector('#itemName').value;
  let quantity = document.querySelector('#quantity').value;
  let priority = document.querySelector('#priority').value;
  let store = document.querySelector('#store').value;
  let price = document.querySelector('#price').value;
  let section = document.querySelector('#section').value;
  let newTab = document.querySelector('#itemList');

  let purchase = new item(itemName, quantity, priority, store, section, price);
  update(purchase, newTab);
}

function strike() {
    newTab.deleteRow(0);
}
