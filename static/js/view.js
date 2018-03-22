'use strict;'
// this is the output to the user. Updates the page. Takes input from model.js.
// Constructs tables n stuff.

class ShoppingView {
    constructor(model) {
        // The bind() method creates a new function that, when called, has its this keyword set to the provided value.
        model.subscribe(this.redrawList.bind(this))
    }

    redrawList(shoppingList, msg) {
        let tbl = document.getElementById("shoppinglist")
        tbl.innerHTML = ""
        for (let item of shoppingList.newItems) {
            this.addRow(item, tbl)
        }

        // FLASK YEY
        config.method = 'POST'
        config.body = JSON.stringify(shoppingList.newItems) // must match content type
        config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}

        fetch('http://localhost:5001/saveList', config)
        .then(function(response) {
          console.log(response)
          return response.json()
        })

    }

    addRow(item, parent) {
        let row = document.createElement("tr")
        row.classList.add(item.priority)
        let cb = document.createElement("input")

        cb.type = "checkbox"
        cb.classList.add("form-control")
        cb.onclick = function() {
          item.purchased = true;
          item.strikethrough(row);
        }
        row.appendChild(cb);
        row.classList.add(item.priority);


        for (let val of ['name', 'quantity', 'store', 'section', 'price']) {
            let td = document.createElement("td")
            td.innerHTML = item[val]
            row.appendChild(td)
        }
        parent.appendChild(row)
    }
}
