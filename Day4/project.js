const products = [
  { id: 1, name: 'Product_1', price: 100, quantity: 5 },
  { id: 2, name: 'Product_2', price: 200, quantity: 15 },
  { id: 3, name: 'Product_3', price: 300, quantity: 10 }
];

const availableProducts = products.filter(product => product.quantity > 0);
console.log('Available Products:');
console.log(availableProducts);

const totalCartValue = availableProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);
console.log(`Total Cart Value: $${totalCartValue}`);

const removedProduct = products.splice(1, 1); 
console.log('Removed Product:');
console.log(removedProduct);
console.log('Updated Products:');
console.log(products);

const clonedProducts = [...products];
clonedProducts[0].quantity = 10; 
console.log('Cloned and Updated Products:');
console.log(clonedProducts);

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
const { name, price } = product;
console.log(`Product Name: ${name}, Price: $${price}`);
