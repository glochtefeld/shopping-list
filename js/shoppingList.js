
// Store & Section should be JS
// Qty / Priority should be hardcoded into html

function addItem() {
  let button = document.querySelector('#buttonAdd');
  let itemName = document.querySelector('#itemName').value;
  let quantity = document.querySelector('#quantity').value;
  let priority = document.querySelector('#priority').value;
  let store = document.querySelector('#store').value;
  let price = document.querySelector('#price').value;
  let newTab = document.querySelector('#itemList');

  let row = document.createElement("tr");
  let tabName = document.createElement('td');
  let tabQ = document.createElement('td');
  let tabStore = document.createElement('td');
  let tabPrice = document.createElement('td');
  let tabLoc = document.createElement('td');

  tabName.innerHTML = itemName;
  tabQ.innerHTML = quantity;
  tabStore.innerHTML = store;
  tabPrice.innerHTML = '$' + price;
  tabLoc.innerHTML = 'inside';

  /* if (priority == 'low') {
    row.class = 'success';
  }
  else if (priority == 'med') {
    row.style.backgroundColor = 'turquoise';
  }
  else {
    row.style.backgroundColor = 'lightsalmon';
  } */

  row.appendChild(tabName);
  row.appendChild(tabQ);
  row.appendChild(tabStore);
  row.appendChild(tabLoc);
  row.appendChild(tabPrice);
  newTab.appendChild(row);

  itemName = '';



}
