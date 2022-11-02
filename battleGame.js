// 1. Create attack function below.  This will take the following parameters:
// attackingPlayer, defendingPlayer, baseDamage, variableDamage

// function attack(attackingPlayer, defendingPlayer, baseDamage, variableDamage) {
//   // Calculate total damage which equals a base number plus random number from 0 to a variable parameter
//   let totalDamage = baseDamage + Math.floor(Math.random() * (variableDamage + 1));
  
//   // Reduce damage to defending player
//   defendingPlayer.health -= totalDamage;

//   // Return a string describing attack
//   return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} damage.
//   ${defendingPlayer.name} has ${defendingPlayer.health} health remaining.`;
// };


// 2. Create player1 and player2 objects below
// Each should have a name property of your choosing, and health property equal to 10

const player1 = {
  name: "Wolverine",
  health: 10
};

const player2 = {
  name: "Magneto",
  health: 10
};

// 3. Refactor attack function to an arrow function.  Comment out function above.

const attack = (attackingPlayer, defendingPlayer, baseDamage, variableDamage) => {
  // Calculate total damage which equals a base number plus random number from 0 to a variable parameter
  let totalDamage = baseDamage + Math.floor(Math.random() * (variableDamage + 1));
  
  // Reduce damage to defending player
  defendingPlayer.health -= totalDamage;

  // Return a string describing attack
  return `${attackingPlayer.name} hits ${defendingPlayer.name} for ${totalDamage} damage.
  ${defendingPlayer.name} has ${defendingPlayer.health} health remaining.`;
}

// DO NOT MODIFY THE CODE BELOW THIS LINE
// Set attacker and defender.  Reverse roles each iteration
let attackOrder = [player1, player2];

// Everything related to preventInfiniteLoop would not generally be necessary, just adding to
// safeguard students from accidentally creating an infinite loop & crashing browser
let preventInfiniteLoop = 100;
while (player1.health >= 1 && player2.health >= 1 && preventInfiniteLoop > 0) {
  const [attackingPlayer, defendingPlayer] = attackOrder;
  console.log(attack(attackingPlayer, defendingPlayer, 1, 2));
  attackOrder = attackOrder.reverse();

  preventInfiniteLoop--;
}
const eliminatedPlayer = player1.health <= 0 ? player1 : player2;
console.log(`${eliminatedPlayer.name} has been eliminated!`);