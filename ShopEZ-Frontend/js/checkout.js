// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateOrderSummary() {
  let $summaryList = $("#orderSummaryList");
  $summaryList.empty();

  let total = 0;

  cart.forEach(product => {
    let qty = product.qty || 1;
    let subtotal = product.price * qty;
    total += subtotal;

    $summaryList.append(`
      <li class="list-group-item bg-dark-card d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img src="${product.image}" alt="${product.name}" class="summary-img me-3">
          <div>
            <div>${product.name}</div>
            <small class="text-muted">Qty: ${qty}</small>
          </div>
        </div>
        <span>₹${subtotal}</span>
      </li>
    `);
  });

  $("#orderTotalText").text(`Total: ₹${total}`);
}

// Call on page load
updateOrderSummary();

// Place Order (dummy)
$("#checkoutForm").on("submit", function(e) {
  e.preventDefault();
  alert("Order placed successfully!");
  localStorage.removeItem("cart");
  cart = [];
  updateOrderSummary();
});