// 1. Create a class function SpaceShip
// - should set two properties: name and topSpeed
// - should have a method accelerate that logs to the console 
//   `${name} moving to ${topSpeed}`

class SpaceShip {
    constructor(name, topSpeed) {
        this.name = name;
        this.topSpeed = topSpeed;
    }
    accelerate() {
        console.log(`${this.name} moving to ${this.topSpeed} light-years per second.`)
    }
}

// 2. Call the constructor with a couple ships, 
// and call accelerate on both of them.

const gaurdiansGalaxy = new SpaceShip('The Milano', 183);
gaurdiansGalaxy.accelerate();
// The Milano moving to 183 light-years per second.
const transformersAutobots = new SpaceShip('The Ark', 115);
transformersAutobots.accelerate();
// The Ark moving to 115 light-years per second.
const starWars = new SpaceShip('Millennium Falcon', 0.75);
starWars.accelerate();
// Millennium Falcon moving to 0.75 light-years per second.