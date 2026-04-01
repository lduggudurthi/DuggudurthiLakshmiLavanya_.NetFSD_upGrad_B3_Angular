$(document).ready(function () {
  loadProducts();
});

// ✅ Load products
function loadProducts() {
  $.getJSON("data/products.json", function (products) {
    let output = "";

    products.forEach(product => {
      output += `
        <div class="col-md-3 mb-4 d-flex">
          <div class="card h-100 p-3 product-card">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <h5 class="mt-2">${product.name}</h5>
            <p class="fw-bold">₹${product.price}</p>

            <div class="amazon-btns d-flex flex-wrap gap-2">
              <a href="product-details.html?id=${product.id}" class="btn view-btn">View Details</a>

              <button class="btn cart-btn" onclick='addToCart(${JSON.stringify(product)})'>
                <i class="bi bi-cart3"></i> Add to Cart
              </button>
            </div>

          </div>
        </div>
      `;
    });

    $("#productList").html(output);
  });
}

// ✅ Add to Cart (FINAL FIX)
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if item already exists
  let existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += 1; // increase quantity
  } else {
    product.quantity = 1; // default quantity
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(`${product.name} added to cart! 🛒`);
}