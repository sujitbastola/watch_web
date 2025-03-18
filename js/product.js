document.querySelectorAll('.morebtn').forEach(button => {
    button.addEventListener('click', () => {
      const cardContent = button.closest('.card-content');
      const description = cardContent.querySelector('.card-description');
  
      description.classList.toggle('expanded');
      button.textContent = description.classList.contains('expanded') ? 'Less' : 'More';
    });
  });


// Modal and Product Data
const modal = document.getElementById("productModal");
const closeBtns = document.querySelectorAll(".close-btn");
const detailsBtns = document.querySelectorAll(".details-btn");
const modalProductName = document.getElementById("modal-product-name");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const addToCartBtn = document.querySelector(".add-to-cart");
const successMessage = document.createElement('div');  // Success message for added to cart

// Sample product data (for all products shown on the page)
const products = [
  {
    name: "Black conda watch",
    price: "Rs 1999.0",
    description: "bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.",
    image: "../img/w4.webp" // Image URL
  },
  // Add more products here following the same structure

  {
    name: "Diamond watch",
    price: "Rs 3559.0",
    description: "bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.",
    image: "../img/ws8.jpg" // Image URL
  },
  {
    name: "Black Diamond",
    price: "Rs 2999.0",
    description: "bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.",
    image: "../img/ws7.webp" // Image URL
  },
  {
    name: "Black Silver watch",
    price: "Rs 23999.0",
    description: "bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.",
    image: "../img/ws5.jpg" // Image URL
  },
  {
    name: "White Conda",
    price: "Rs 2999.0",
    description: "bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.",
    image: "../img/ws7.webp" // Image URL
  },
 
  {
    name: "Siva",
    price: "Rs 2999.0",
    description: "bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.",
    image: "../img/ws16.jpeg" // Image URL
  },
  {
    name: "Clssic watch",
    price: "Rs 2999.0",
    description: "bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.",
    image: "../img/ws13.jpeg" // Image URL
  },
  {
    name: "Waterproof Watch",
    price: "Rs 2999.0",
    description: "bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.bakko chala sarpako band bulletproof glass if you break this watch you will get 2.",
    image: "../img/ws12.jpeg" // Image URL
  },
];

// Show modal with product details
detailsBtns.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link action
    const product = products[index];

    // Update modal content with product data
    modalProductName.textContent = product.name;
    modalPrice.innerHTML = `<span class="discount-price">${product.price}</span>`;
    modalDescription.textContent = product.description;

    // Remove any previously inserted image before adding the new one
    const existingImage = document.getElementById('modal-image');
    if (existingImage) {
      existingImage.remove();
    }

    // Add product image to modal
    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.name;
    productImg.id = 'modal-image'; // Ensure only one image exists at a time
    productImg.style.width = '100%';
    document.querySelector(".modal-content").insertBefore(productImg, modalPrice);

    // Show modal
    modal.style.display = "block";
  });
});

// Add to Cart functionality
addToCartBtn.addEventListener("click", () => {
  // Success message
  successMessage.textContent = "Item added successfully!";
  successMessage.style.color = "green";
  successMessage.style.textAlign = "center";
  successMessage.style.marginTop = "50px";
  document.querySelector(".modal-content").appendChild(successMessage);

  setTimeout(() => {
    successMessage.style.display = "none"; // Hide after 2 seconds
  }, 2000);

  modal.style.display = "none"; // Close modal after adding to cart
});

// Close modal when clicking on the "Close" button or outside the modal
closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "none";
  });
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

addToCartBtn.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = {
      name: modalProductName.textContent,
      price: modalPrice.textContent.replace("Rs ", ""),
      image: document.getElementById("modal-image").src
  };

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  // Show alert message
  alert(`${product.name} added to cart successfully!`);

  // Success message inside modal
  successMessage.textContent = "Item added successfully!";
  successMessage.style.color = "green";
  successMessage.style.textAlign = "center";
  successMessage.style.marginTop = "50px";
  document.querySelector(".modal-content").appendChild(successMessage);

  setTimeout(() => {
      successMessage.style.display = "none";
  }, 2000);

  modal.style.display = "none"; 
});
