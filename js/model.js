'use strict;'
class item {
  constructor(name, quant, store, section, price, purchased=false) {
    this.name = name;
    this.quant = quant;
    this.store = store;
    this.section = section;
    this.price = price;
    this.purchased = purchased;
  }
}
