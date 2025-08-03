// Create an array of product objects
const products = [
  { id: 1, name: 'Product A', price: 10, quantity: 5 },
  { id: 2, name: 'Product B', price: 20, quantity: 0 },
  { id: 3, name: 'Product C', price: 30, quantity: 10 }
];

// Use filter() to get all products with quantity > 0
const availableProducts = products.filter(product => product.quantity > 0);
console.log('Available Products:');
console.log(availableProducts);

// Use reduce() to calculate the total cart value
const totalCartValue = availableProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
console.log(`Total Cart Value: $${totalCartValue}`);

// Use slice() and splice() to manipulate the product list
const removedProduct = products.splice(1, 1); // Remove Product B
console.log('Removed Product:');
console.log(removedProduct);
console.log('Updated Products:');
console.log(products);

// Use the spread operator to clone and update the product list
const clonedProducts = [...products];
clonedProducts[0].quantity = 10; // Update quantity of first product in clone
console.log('Cloned and Updated Products:');
console.log(clonedProducts);

// Create a product object with a method to print product details
const product = {
  id: 4,
  name: 'Product D',
  price: 40,
  quantity: 5,
  printDetails() {
    console.log(`ID: ${this.id}, Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
  }
};
product.printDetails();

// Use destructuring to extract product details for display
const { name, price } = product;
console.log(`Product Name: ${name}, Price: $${price}`);