'use strict;'
var ViewThing = require('./view');

class Subject {
  constructor() {
    this.handlers = [];
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
      fn(scope, msg);
    }
  }
}
