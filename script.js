// Get all the product category buttons
const categoryButtons = document.querySelectorAll('.product-category-btn');

// Get the product list container
const productListContainer = document.querySelector('.product-list-container');

// Add click event listeners to the category buttons
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the category name from the button's data attribute
    const category = button.dataset.category;

    // Filter the products based on the selected category
    const filteredProducts = products.filter(product => product.category === category);

    // Update the product list with the filtered products
    updateProductList(filteredProducts);

    // Add the 'active' class to the clicked button
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Function to update the product list
function updateProductList(productList) {
  // Clear the existing product list
  productListContainer.innerHTML = '';

  // Loop through the product list and create HTML elements for each product
  productList.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.textContent = product.description;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: ${product.price}`;

    productElement.appendChild(productName);
    productElement.appendChild(productDescription);
    productElement.appendChild(productPrice);

    productListContainer.appendChild(productElement);
  });
}

// Sample product data
const products = [
  {
    name: 'Kale',
    category: 'vegetables',
    description: 'Fresh, organic kale',
  },
  {
    name: 'Mango',
    category: 'fruits',
    description: 'Juicy, ripe mangoes',
  },
  {
    name: 'Garlic',
    category: 'herbs-and-spices',
    description: 'Fresh, fragrant garlic',
  },
  // Add more product data as needed
];
