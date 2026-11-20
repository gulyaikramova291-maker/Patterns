
const World = require('./World');

const world = new World();

world.addBlock(0, 0, 0, 'Grass');
world.addBlock(1, 0, 0, 'Grass');
world.addBlock(2, 0, 0, 'Stone');
world.addBlock(3, 0, 0, 'Grass');
world.addBlock(4, 0, 0, 'Dirt');
world.render();
world.checkFlyweight();
