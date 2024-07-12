// Array and its methods:




//Real-World Examples and Uses
/*Example 1: Managing a List of Users
In a web application, you might need to manage a list of users. Each user could be represented
 as an object, and you can store these objects in an array.*/


 interface User {
    id: number;
    name: string;
    email: string;
  }
  
  let users: User[] = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" }
    
  ];
 

  //Example 2: Shopping Cart in an E-commerce App
/*In an e-commerce application, you might need to keep track of items in a shopping cart.
 Each item can be an object, and the shopping cart can be an array of these items*/

  interface CartItem {
    productId: number;
    productName: string;
    quantity: number;
    price: number;
  }
  
  let cart: CartItem[] = [
    { productId: 101, productName: "Laptop", quantity: 1, price: 999.99 },
    { productId: 202, productName: "Mouse", quantity: 2, price: 25.49 }
  ];
  
  // Adding an item to the cart
  cart.push({ productId: 303, productName: "Keyboard", quantity: 1, price: 49.99 });
  

  
  