'use strict;'
//The controller is used to accept input from shoppingList.html
//and convert it to output for model.js to update the view.js
//var shoppingModel = new ShoppingList();
var stores = ['Fareway', 'Ace Hardware', 'Caseys', 'The Hatchery', 'Amundsens'];
var sections = ['Produce', 'Meats', 'Cereal', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Tools', 'Clothing'];
var quantity = [1,2,3,4,5,6,7,8,9,10];

var shoppingModel = new shoppingList();
var myView = new ShoppingView(shoppingModel)


function populateSelect(selectId, sList) { // Fills out dropdowns
    let sel = document.getElementById(selectId, sList);
    for (let s of sList) {
        let opt = document.createElement("option");
        opt.value = s;
        opt.innerHTML = s;
        sel.appendChild(opt);
        document.getElementById;
    }
}

$(document).ready(function () {
    populateSelect('store', stores); // select ID, array
    populateSelect('category', sections);
    populateSelect('quantity', quantity);
})


function clickedon() {
    let rowcolids = ['itemName', 'quantity', 'priority','store', 'category', 'price']
    let vals = {}
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
    }
    let it = new Item(vals.itemname, vals.qty, vals.priority, vals.store, vals.category, vals.price)
    shoppingModel.addItem(it);
}

function removal(row) {
  deleteRow(item);
}
