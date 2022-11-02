// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const teacher = { says: 'blah, blah', talk(punct) {
    console.log(`${this.says}${punct}`); }
  };
  const student = {
    says: 'Wait... what' }
  teacher.talk.call(student, '?');



const logReceipt = (...items) => {
  console.log(items);

  items.forEach(item => {
    console.log(`Description: ${item.descr}, Price: ${item.price}`);
  })

  // let total = items.reduce((sum, price) => sum + price);
  // console.log(`Final total: ${total}`);
  
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
