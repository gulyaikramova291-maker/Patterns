
const Block = require('./Block');
const BlockFactory = require('./BlockFactory');

class World {
    constructor() {
        this.blocks = [];
        this.factory = new BlockFactory();
    }

    addBlock(x, y, z, name) {
        const blockType = this.factory.getBlockType(name);

        const block = new Block(x, y, z, blockType);

        this.blocks.push(block);
    }

    render() {
        console.log('=== Minecraft World ===');

        this.blocks.forEach(block => {
            block.render();
        });

        console.log('Total blocks:', this.blocks.length);
        console.log('Unique BlockTypes:', this.factory.getTotalTypes());
    }

    checkFlyweight() {
        const grassBlocks = this.blocks.filter(
            block => block.blockType.name === 'Grass'
        );

        console.log(
            'Grass blocks use same object:',
            grassBlocks[0].blockType === grassBlocks[1].blockType &&
            grassBlocks[1].blockType === grassBlocks[2].blockType
        );
    }
}

module.exports = World;
