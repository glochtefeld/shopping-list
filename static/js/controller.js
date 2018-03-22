var stores = ['Fareway', 'Ace Hardware', 'Caseys', 'The Hatchery', 'Amundsens'];
var sections = ['Produce', 'Meats', 'Cereal', 'Canned Goods', 'Frozen Foods', 'Dairy', 'Liquor', 'Tools', 'Clothing'];


var shoppingModel = new ShoppingList()
var myView = new ShoppingView(shoppingModel)

fetch('/getList')
.then(function(response) {
  console.log(response)
  return response.json()
})
.then(function(thelist){
  if (json != null) {
    let shopList = JSON.parse(thelist)
    for (let item of shopList) {
      let newitem = new Item(item['name'], item['quantity'], item['priority'], item['store'], item['section'], item['price'])
      shoppingModel.addItem(newitem)
    }
    }
})
  .catch(error => console.error('Error: ', error))
  .then(function(response){
    if (response != null) {
      for ( i in response) {
        let nu = new Item(i)
      }
    }
  })




function clickedon() {
    let rowcolids = ['itemname', 'qty', 'store', 'category', 'price', 'priority']
    let vals = {}
    for (let cid of rowcolids) {
        vals[cid] = document.getElementById(cid).value;
    }
    let it = new Item(vals.itemname, vals.qty, vals.priority, vals.store, vals.category, vals.price)
    shoppingModel.addItem(it)
}

function populateSelect(selectId, sList) {
    let sel = document.getElementById(selectId, sList)
    for (let s of sList) {
        let opt = document.createElement("option")
        opt.value = s
        opt.innerHTML = s
        sel.appendChild(opt)
    }
}

function sort(rowHead) {

  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("shoppinglistTB");
  switching = true;
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[rowHead];
      y = rows[i + 1].getElementsByTagName("TD")[rowHead];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch= true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

function clearAll() {

  let tbody = document.getElementById('shoppinglist')
  tbody.innerHTML = ""
  for (item in shoppingModel.newItems) {
    shoppingModel.deleteItem(item)
  }

}

$(document).ready(function () {
    populateSelect('store', stores)
    populateSelect('category', sections)
})
