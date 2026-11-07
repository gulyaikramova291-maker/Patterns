const Copyable = require("./Copyable");

class GameCharacter extends Copyable{
    constructor(id,name,level,weapon){
        super()

        this.id=id;
        this.name=name;
        this.level=level;
        this.weapon=weapon;
    }

    clone(){
        return new GameCharacter(
            this.id,
            this.name,
            this.level,
            this.weapon

        )
    }

    toString(){
        return `GameCharacter { id: ${this.id}, name: ${this.name}, level: ${this.level}, weapon: ${this.weapon} }`
    }

    getId(){
        return this.id

    }

    setId(){
        return this.id
    }

    getName(){
        return this.name
    }

    setName(){
        return this.name
    }

    getLevel(){
        return this.level
    }

    setLevel(){
        return this.level
    }

    getWeapon(){
        return this.weapon
    }

    setWeapon(){
        return this.weapon
    }
}
module.exports = GameCharacter;