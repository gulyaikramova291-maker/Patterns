class CharacterFactory{
    constructor(character){
        this.character=character
    }

    setCharacter(character){
        this.character=character

    }
    cloneCharacter(){
        return this.character.clone()
    }
}
module.exports=CharacterFactory