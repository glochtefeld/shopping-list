'use strict;'
// The model accepts input from controller.js and directs output to the view.js.
class item {
  constructor(name, quant,priority, store, section, price, purchased=false) {
    this.name = name;
    this.quant = quant;
    this.priority = priority;
    this.store = store;
    this.section = section;
    this.price = price;
    this.purchased = purchased;
  }
}

/*class table {
  constructor() {
    this.table = document.querySelector('itemList');
  }

  function rmRow() {
    if ()
    this.table.deleteRow()
  }
}*/
