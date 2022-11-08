// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...items) => {
  
  // Declared variables to complete extra credit showing subtotal and tax
  let subTotal = 0;
  let waSalesTax = 0.1025;
  // Used forEach method on array of objects to log each elements' description and price
  items.forEach(item => {
    item.tax = item.price * waSalesTax;
    console.log(`Item: ${item.descr} - $${item.price}`);
    subTotal += item.price;
  });
  // Print subtotal, tax, total.
  console.log(`
  Subtotal: \t\t$${subTotal}
  Taxes @${waSalesTax*100}%: \t$${(subTotal * waSalesTax).toFixed(2)}
  Total: \t\t\t$${(subTotal + (subTotal * waSalesTax)).toFixed(2)}`);
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

/*
Item: Burrito - $5.99
Item: Chips & Salsa - $2.99
Item: Sprite - $1.99

  Subtotal: 		  $10.97
  Taxes @10.25%: 	$1.12
  Total: 			    $12.09
*/