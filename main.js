"use strict";
// Array and its methods:
let users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
];
let cart = [
    { productId: 101, productName: "Laptop", quantity: 1, price: 999.99 },
    { productId: 202, productName: "Mouse", quantity: 2, price: 25.49 }
];
// Adding an item to the cart
cart.push({ productId: 303, productName: "Keyboard", quantity: 1, price: 49.99 });
