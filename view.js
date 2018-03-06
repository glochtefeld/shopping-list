'use strict;'
// this is the output to the user. Updates the page. Takes input from model.js.
// Constructs tables n stuff.

function update(item, newTab) {
  let row = document.createElement("tr");
  let tabName = document.createElement('td');
  let tabQ = document.createElement('td');
  let tabStore = document.createElement('td');
  let tabPrice = document.createElement('td');
  let tabLoc = document.createElement('td');
  let clickBox = document.createElement('input');
  clickBox.type = 'checkbox'


  tabName.innerHTML = item.name;
  tabQ.innerHTML = item.quant;
  tabStore.innerHTML = item.store;
  tabPrice.innerHTML = '$' + item.price;
  tabLoc.innerHTML = item.section;

  if (item.priority == 'low') {
    row.style.backgroundColor == 'lightgreen';
  }
  else if (item.priority == 'med') {
    row.style.backgroundColor = 'turquoise';
  }
  else {
    row.style.backgroundColor = 'lightsalmon';
  }

  row.appendChild(clickBox);
  row.appendChild(tabName);
  row.appendChild(tabQ);
  row.appendChild(tabStore);
  row.appendChild(tabLoc);
  row.appendChild(tabPrice);
  newTab.appendChild(row);

  if (clickBox.checked) {
    strike();
  }

}

/*var ViewThing = require('./view');

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
}*/
