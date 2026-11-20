
const BlockType = require('./BlockType');

class BlockFactory {
    constructor() {
        this.blockTypes = new Map();
    }

    getBlockType(name) {
        if (this.blockTypes.has(name)) {
            return this.blockTypes.get(name);
        }

        let blockType;

        switch (name) {
            case 'Grass':
                blockType = new BlockType('Grass', 'grass.png', 'Green');
                break;

            case 'Stone':
                blockType = new BlockType('Stone', 'stone.png', 'Gray');
                break;

            case 'Dirt':
                blockType = new BlockType('Dirt', 'dirt.png', 'Brown');
                break;

            case 'Water':
                blockType = new BlockType('Water', 'water.png', 'Blue');
                break;

            default:
                throw new Error('Unknown block type: ' + name);
        }

        this.blockTypes.set(name, blockType);

        return blockType;
    }

    getTotalTypes() {
        return this.blockTypes.size;
    }
}

module.exports = BlockFactory;
