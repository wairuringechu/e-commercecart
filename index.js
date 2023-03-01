// define the array of prices and quantities
var items = [
    { price: 300, quantity: 6 },
    // { price: 4, quantity: 4 },
    // { price: 5, quantity: 1 }
  ];
  
  // get a reference to the total button
  var totalBtn = document.querySelector('#item1 input[value="total"]');
  
  // add an event listener to the total button
  totalBtn.addEventListener('click', function() {
    // calculate the total amount
    var total = 0;
    for (var i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
  
    // update the display of the total amount in the HTML
    var totalDisplay = document.createElement('p');
    totalDisplay.textContent = 'Total: ' + total;
    document.querySelector('#item1').appendChild(totalDisplay);
  });
  
  function removeItem() {
    var item = document.getElementById("item1");
    item.parentNode.removeChild(item);
  }