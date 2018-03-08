'use strict;'
// this is the output to the user. Updates the page. Takes input from model.js.
// Constructs tables n stuff.

class ShoppingView {
    constructor(model) {
        // The bind() method creates a new function that, when called, has its this keyword set to the provided value.
        model.subscribe(this.redrawList.bind(this))
    }

    redrawList(shoppingList, msg) {
        let tbl = document.getElementById("shoppingList")
        tbl.innerHTML = "";
        for (let item of shoppingList.newItems) {
            this.addRow(item, tbl)
        }

    }

    addRow(item, parent) {
        let row = document.createElement("tr"); // makes row
        row.classList.add(item.priority); // adds priority to shoppingView variables, probably
        let cb = document.createElement("input"); //created Checkbox
        cb.type = "checkbox";
        cb.classList.add("form-control");
        cb.onclick = function() { item.purchased = true; } // quick function definition, sets purchased == true
        row.appendChild(cb) // first item in row

        for (let val of ['name', 'quantity', 'store', 'section', 'price']) {
            // Basically cranks out td for each quality
            let td = document.createElement("td")
            td.innerHTML = item[val] // val is redefined each time
            row.appendChild(td)
        }
        parent.appendChild(row) // parent is table
    }

    deleteRow(row) {
      if
    }
}
