// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...items) => {
  // Used forEach method on array of objects to log each elements' description and price
  items.forEach(item => {
    console.log(`Item: ${item.descr}, Price: ${item.price}`);
  });

  // Used the reduce method to return an accumulated sum of the price from each object in the array. The syntax '{}' was used in the function's parameter section to select the 'price' in each object to include in the accumulated sum.
  let totalPrice = items.reduce((sum, {price}) => sum + price, 0);
  console.log(`Total price: ${totalPrice}`);
}


// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
