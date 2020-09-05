/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFromShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 105,
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2,
};
var product3 = {
  id: 3,
  name: "Time Machine",
  price: 999777,
  stock: 0,
};
var product4 = {
  id: 4,
  name: "Star Ship",
  price: 100,
  stock: 5,
};

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

let shoppingCart = {
  totalPrice: 0,
  selectedProducts: [],
  productsOnCart: [],
};

// 3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
// the function will add the product to the selectedProduct list, and add the price to the totalPrice
function addToShoppingCart(id) {
  let product = products.find((obj) => {
    return obj.id === id;
  });
  // 6. If there is not enough stock, the product cannot be added to the shopping cart
  if (product.stock > 0) {
    shoppingCart.totalPrice += product.price;
    shoppingCart.selectedProducts.push(product.name);
    shoppingCart.productsOnCart.push(product);
  } else {
    console.log(
      `Sorry, the product ${product.name} is out of stock. Try a bit later.`
    );
  }
}

// 4. Create the function removeFromShoppingCart to remove a product that a client does not like anymore
function removeFromShoppingCart(id) {
  let product = products.find((obj) => {
    return obj.id === id;
  });
  shoppingCart.totalPrice -= product.price;

  let indexOfProduct = shoppingCart.selectedProducts.indexOf(product.name);
  shoppingCart.selectedProducts.splice(indexOfProduct, 1);
  shoppingCart.productsOnCart.splice(indexOfProduct, 1);
}

// 5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
// In addition will substract 1 in the product stock of bought products
function shop() {
  shoppingCart.productsOnCart.forEach((obj) => {
    obj.stock--;
  });
  shoppingCart.totalPrice = 0;
  shoppingCart.selectedProducts = [];
  shoppingCart.productsOnCart = [];
}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts);
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts);
addToShoppingCart(3);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts);
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts);
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts);
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts);
