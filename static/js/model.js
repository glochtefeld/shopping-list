'use strict';
class Item {
    constructor(name, quantity, priority, store, section, price) {
        this.name = name;
        this.quantity = quantity;
        this.priority = priority;
        this.store = store;
        this.section = section;
        this.price = price;

        this._purchased = false;
    }
    get purchased() {
        return this._purchased;
    }
    set purchased(nv) {
        this._purchased = nv;
        alert(`${this.name} was purchased`);

      }
    strikethrough(row) {
      row.className = 'strikeout';

      setTimeout(removeRow(row, row.parent), 2);
        }

}

class Subject {
    constructor() {
        this.handlers = []
    }
    subscribe(fn) {
            this.handlers.push(fn);
        }
    unsubscribe(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    }
    publish(msg, someobj) {
        var scope = someobj || window;
        for (let fn of this.handlers) {
            fn(scope, msg)
        }
    }
}

class ShoppingList extends Subject {
    constructor() {
        super()
        this.newItems = []
        this.oldItems = [];
    }
    addItem(it) {
        this.newItems.push(it)
        this.publish('newitem', this)
    }
    deleteItem(it) {
      this.oldItems.push(it)
      this.newItems.splice(it)
    }
}
