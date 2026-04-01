$(document).ready(function () {
  loadCart();
});

// ✅ Get cart from localStorage
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// ✅ Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ✅ Load cart items
function loadCart() {
  let cart = getCart();
  let output = "";
  let total = 0;

  if (cart.length === 0) {
    $("#cartItems").html("<h5>Your cart is empty</h5>");
    $("#total").text("Total: ₹0");
    return;
  }

  cart.forEach((item, index) => {
    let quantity = item.quantity || 1;
    let itemTotal = item.price * quantity;

    total += itemTotal;

    output += `
      <div class="card p-3 mb-3">
        <div class="d-flex justify-content-between align-items-center">
          
          <div>
            <h5>${item.name}</h5>
            <p>₹${item.price} x ${quantity}</p>
            <p><b>Subtotal: ₹${itemTotal}</b></p>
          </div>

          <div>
            <button class="btn btn-sm btn-secondary"
              onclick="changeQty(${index}, -1)">-</button>

            <button class="btn btn-sm btn-secondary"
              onclick="changeQty(${index}, 1)">+</button>

            <br><br>

            <button class="btn btn-danger btn-sm"
              onclick="removeItem(${index})">Remove</button>
          </div>

        </div>
      </div>
    `;
  });

  $("#cartItems").html(output);
  $("#total").text("Total: ₹" + total);
}

// ✅ Change quantity (+ / -)
function changeQty(index, change) {
  let cart = getCart();

  cart[index].quantity = (cart[index].quantity || 1) + change;

  // Minimum quantity = 1
  if (cart[index].quantity < 1) {
    cart[index].quantity = 1;
  }

  saveCart(cart);
  loadCart();
}

// ✅ Remove item
function removeItem(index) {
  let cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  loadCart();
}