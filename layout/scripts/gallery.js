var totalAmount = 0;

function addToCart(itemName, itemPrice) {
  totalAmount += itemPrice;

  document.getElementById('totalAmount').innerText = '$' + totalAmount.toFixed(2);

  var cartList = document.getElementById('cartList');
  var listItem = document.createElement('li');
  listItem.innerHTML = `<p>${itemName} - $${itemPrice.toFixed(2)}</p>`;
  cartList.appendChild(listItem);
}

function buyItem(itemName, itemPrice) {
  addToCart(itemName, itemPrice);
  alert(`Item "${itemName}" added to the cart.`);
}

function checkout() {
  alert('Redirecting to checkout page. Total amount: $' + totalAmount.toFixed(2));
}