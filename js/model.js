'use strict;'
// The model accepts input from controller.js and directs output to the view.js.
// var ViewThing = require('./view');

class Item {
  constructor(name, quant, priority, store, section, price) {
    this.name = name;
    this.quant = quant;
    this.priority = priority;
    this.store = store;
    this.section = section;
    this.price = price;
    this.purchased = false; // Not bought by default
  }
  get purchased() {
    return this.purchased;
  }

  set purchased(val) {
    this._purchased = val;
    alert(`${this.name} was purchased`);
  }
}

class Subject { // This is complicated
  constructor() {
    this.handlers = []; //handlers are subscribers, listen for Updates
  }
  subscribe(fn) { // adds subscribers
    this.handlers.push(fn);
  }

  unsubscribe(fn) { // searches for and removes subscriber, sort of
    this.handlers = this.handlers.filter( // filter looks for functions != fn
      function(item) {
        if (item !== fn) {
          return item; // then reassigns this.handlers to include all saved functions
        }
      }
    );
  }

  publish(msg, someobj) { // fun part: pushes out updates to subscribers
    var scope = someobj || window; //scope is either table (usually) or entire window
    for (let fn of this.handlers) {
      fn(scope, msg); // basically, subs are functions that accept a scope and msg.
                      // this calls every subscriber function, or 'callback'
    }
  }
}

class shoppingList extends Subject {
  constructor(){
    super()
    this.newItems = [];
    this.oldItems = [];
  }
  addItem(item) { //
    this.newItems.push(item);
    this.publish('newitem', this);
  }

}
