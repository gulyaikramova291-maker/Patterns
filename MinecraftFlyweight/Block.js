class Block{
    constructor(x,y,z,blockType){
        this.x=x
        this.y=y
        this.z=z
        this.blockType=blockType
    }
    render(){
        console.log(
            `${this.blockType.name}at (${this.x},${this.y},${this.z})`
        )
    }
}
module.exports=Block